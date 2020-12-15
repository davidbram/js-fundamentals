// 1 Make 4 api calls async and make a 5th api call only when all 4 have completed execution
// 2. Make 4 api calls. Log concatenated response of all api calls. Finally log that all api calls are completed on console.

const axios = require("axios");

const urlJoin = require("url-join");

let calls = [];

const apiUrl = "https://swapi.dev/api";

const urls = [
  { type: "Person", endpoint: "people" },
  { type: "Film", endpoint: "films" },
  { type: "Planet", endpoint: "planets" },
  { type: "Specie", endpoint: "species" },
  { type: "Starship", endpoint: "starships" },
];

function apiCall(url, id = "1") {
  return new Promise((resolve, reject) => {
    const fullUrl = urlJoin(apiUrl, url.endpoint, id);
    axios
      .get(fullUrl)
      .then((res) => {
        let disp = `${url.type} name is ${res.data.name ?? res.data.title}`;
        calls.push(disp);
        console.log(disp);
        resolve("Done!");
        console.log("after Done");
      })
      .catch((err) => console.log(err));
  });
}

const promises = [
  apiCall(urls[0]),
  apiCall(urls[1]),
  apiCall(urls[2]),
  apiCall(urls[3]),
];

Promise.all(promises).then(
  function (result) {
    const starshipUrl = urls[4];
    const fullUrl = urlJoin(apiUrl, starshipUrl.endpoint, "2");
    axios
      .get(fullUrl)
      .then((res) => {
        console.log(
          `\n4 api calls complete. 5th api call is ${starshipUrl.type} name: ${res.data.name}`
        );
        console.log("\nConcatenated response: " + calls.join(". "));
        console.log("\nAll api calls completed");
      })
      .catch((err) => console.log(err));
  },
  function (err) {
    console.log(err);
  }
);

// Read about promises and async and await. Promise chaining
