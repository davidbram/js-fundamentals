// Problem: Call API's https://swapi.dev/api/people/{id}/ five at a time where the id is in the range from 1 - 79
// And print the names from the response onto console.

const axios = require('axios');

const urlJoin = require('url-join');

let calls = [];

let url = "https://swapi.dev/api/people";

async function apiCall(id = '1'){
    return(new Promise((resolve, reject) => {
        const fullUrl = urlJoin(url, String(id));
        axios.get(fullUrl).then((res) => 
        {
            let disp = `Person name is ${res.data.name}`;
            calls.push(disp);
            // console.log(disp);
            resolve("Done!");
        }).catch((err) => console.log(err => console.log(err)));
}))
};

async function batchCall(size) {
    let promises;
    while(size <= 80) {

        promises = [
            apiCall(Number(size-4)),
            apiCall(Number(size-3)),
            apiCall(Number(size-2)),
            apiCall(Number(size-1)),
            apiCall(Number(size))
        ];
    
        await Promise.all(promises).then(res => {
            console.log("\nConcatenated response: "+calls.join(". "));
            console.log("5 api calls complete.");
            calls = [];
            size += 5;
        }).catch(err => console.log(err => console.log(err)))

    }
}

batchCall(5);
