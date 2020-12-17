// 1 Make 4 api calls async and make a 5th api call only when all 4 have completed execution
// 2. Make 4 api calls. Log concatenated response of all api calls. Finally log that all api calls are completed on console.

const axios = require("axios");

const urlJoin = require("url-join");

// let calls = [];

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
      .then(res => {
        let disp = `${url.type} name is ${res.data.name ?? res.data.title}`;
        // calls.push(disp);
        console.log(disp);
        resolve(disp);
        //console.log("after Done");
      })
      .catch(err => reject(err));
  });
}

const promises = urls.slice(0,-1).map(url => apiCall(url));

function check4ApiCallsComplete(res) {
  console.log(`Concatenated response: ${res.join(". ")}`);
  const [lastUrl] = urls.slice(-1);
  const fullUrl = urlJoin(apiUrl, lastUrl.endpoint, "2");
  return new Promise(resolve => resolve(fullUrl))
}

function apiCall5(res) {
  const [lastUrl] = urls.slice(-1);
  console.log(`\n4 api calls complete. 5th api call is ${lastUrl.type} name: ${res.data.name}`);
  return new Promise(resolve => resolve("\nAll api calls completed"));
}

function allCallsComplete(res) {
  console.log(res);
}

Promise.all(promises).then(
  result => check4ApiCallsComplete(result)
)
.then(url => axios.get(url))
.then(res => apiCall5(res))
.then(res => allCallsComplete(res))
.catch(err => console.log(err));

// Read about promises and async and await. Promise chaining



// old code

  // result => {
  //   const starshipUrl = urls[4];
  //   const fullUrl = urlJoin(apiUrl, starshipUrl.endpoint, "2");
  //   axios
  //     .get(fullUrl)
  //     .then(res => {
  //       console.log(
  //         `\n4 api calls complete. 5th api call is ${starshipUrl.type} name: ${res.data.name}`
  //       );
  //       console.log("\nConcatenated response: " + calls.join(". "));
  //       console.log("\nAll api calls completed");
  //     })
  //     .catch((err) => console.log(err));
  // },