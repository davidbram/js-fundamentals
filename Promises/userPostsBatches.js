const axios = require('axios');

let rootUrl = "https://jsonplaceholder.typicode.com/posts?userId=";

function* range(start, end) {
    for(let i = start; i <= end; i++) {
        yield i;
    }
}

(async () => {
    try {
        let users = await axios.get("https://jsonplaceholder.typicode.com/users");
        let totalUsers = users.data.length;
        let start = 1, end;
        let promises;
        while(start <= totalUsers) {
            start = Math.min(start, totalUsers);
            end = Math.min(start+2,totalUsers)
            promises = [...range(start, end)].map(id => axios.get(rootUrl+id));
            let results = await Promise.allSettled(promises);
            results.forEach(result => {
                if(result.status == 'fulfilled') {
                    let posts = result.value;

                    let  [post1]= posts.data.slice(0,1);

                    console.log(users.data.find(user => user.id == post1.userId).name);
                    
                    posts.data.forEach(post => {
                        console.log(post.title)
                    });
                    
                    console.log("\n");
                }
            });
            start += 3;
        }
        
    } catch (error) {
        console.log(error);
    }
})();
