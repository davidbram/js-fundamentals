const axios = require("axios");

const urlJoin = require("url-join");

const apiUrl = "https://swapi.dev/api";

const urls = [
  { type: "Person", endpoint: "people" },
  { type: "Film", endpoint: "films" },
  { type: "Planet", endpoint: "planets" },
  { type: "Specie", endpoint: "species" },
  { type: "Starship", endpoint: "starships" },
];

async function apiCall(url, id = "1") {
  const fullUrl = urlJoin(apiUrl, url.endpoint, id);
  try {
    let res = await axios.get(fullUrl);
    let disp = `${url.type} name is ${res.data.name ?? res.data.title}`;
    console.log(disp);
    return Promise.resolve(disp);
  } catch (error) {
    return Promise.reject(error);
  }

  // return new Promise((resolve, reject) => {
  //   const fullUrl = urlJoin(apiUrl, url.endpoint, id);
    // axios
    //   .get(fullUrl)
    //   .then(res => {
    //     let disp = `${url.type} name is ${res.data.name ?? res.data.title}`;
    //     console.log(disp);
    //     resolve(disp);
    //     //console.log("after Done");
    //   })
    //   .catch(err => reject(err));
  // });
}

const promises = urls.slice(0,-1).map(url => apiCall(url));

async function check4ApiCallsComplete(res) {
  console.log(`Concatenated response: ${res.join(". ")}`);
  const [lastUrl] = urls.slice(-1);
  const fullUrl = urlJoin(apiUrl, lastUrl.endpoint, "2");
  return new Promise(resolve => resolve(fullUrl))
}

async function apiCall5(res) {
  const [lastUrl] = urls.slice(-1);
  console.log(`\n4 api calls complete. 5th api call is ${lastUrl.type} name: ${res.data.name}`);
  return new Promise(resolve => resolve("\nAll api calls completed"));
}

async function allCallsComplete(res) {
  console.log(res);
}

(async () => {    
    try {
        let result = await Promise.all(promises)
        let url = await check4ApiCallsComplete(result);
        let response = await axios.get(url);
        let api5Res = await apiCall5(response);
        await allCallsComplete(api5Res);
    } catch (error) {
        console.log(error);
    }
})();
