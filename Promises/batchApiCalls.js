// Problem: Call API's https://swapi.dev/api/people/{id}/ five at a time where the id is in the range from 1 - 79
// And print the names from the response onto console.

const axios = require("axios");

const urlJoin = require("url-join");

let calls = [];

let url = "https://swapi.dev/api/starships";

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

async function apiCall(id = "1") {
  const fullUrl = urlJoin(url, String(id));
  try {
    let res = await axios.get(fullUrl);
    let disp = `Starship name is ${res.data.name}`;
    //console.log(disp);
    return Promise.resolve(disp);
  } catch (error) {
    return Promise.reject(error);
  }
}

function getConcatenatedRes(res) {
  if (res != 0) {
    return `\nConcatenated response: ${res.join(". ")}`;
  } else {
    return "\nStarships missing";
  }
}

async function batchCall(batchSize, totalCalls) {
  let start = 1;
  let promises;
  while (start <= totalCalls) {
    promises = [...range(start, start + batchSize - 1)].map((id) =>
      apiCall(id)
    );
    let results = await Promise.allSettled(promises);
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        calls.push(result.value);
      }
      // else if(result.status == "rejected") {
      //     calls.push("missing");
      // }
    });
    let res = await getConcatenatedRes(calls);
    if (res) {
      console.log(res);
    }
    calls = [];
    start += batchSize;
  }
  console.log("\nAll api calls completed");
}

batchCall(5, 80);
