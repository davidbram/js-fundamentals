// 1 Make 4 api calls async and make a 5th api call only when all 4 have completed execution
// 2. Make 4 api calls. Log concatenated response of all api calls. Finally log that all api calls are completed on console.

const axios = require('axios');

let calls = [];

let urls = [
   {type: 'Person', endpoint: 'https://swapi.dev/api/people/1'},
   {type: 'Film', endpoint: 'https://swapi.dev/api/films/1'},
   {type: 'Planet', endpoint: 'https://swapi.dev/api/planets/1'},
   {type: 'Specie', endpoint: 'https://swapi.dev/api/species/1'}
]

async function apiCall(url){
    return(new Promise((resolve, reject) => {
        axios.get(url.endpoint).then((res) => 
        {
            let disp = `${url.type} name is ${res.data.name ?? res.data.title}`;
            calls.push(disp);
            console.log(disp);
            resolve("Done!");
        }).catch((err) => console.log(err));
}))};

const promises = [apiCall(urls[0]),
    apiCall(urls[1]),
    apiCall(urls[2]),
    apiCall(urls[3])];

Promise.all(promises).then(function(result){
    axios.get('https://swapi.dev/api/starships/2').then((res) => {console.log(`\n4 api calls complete. 5th api call is Starship name: ${res.data.name}`);
    console.log("\nConcatenated response: "+calls.join(". "));
    console.log("\nAll api calls completed");
}).catch((err) => console.log(err));
}, function(err){
    console.log(err);
})
