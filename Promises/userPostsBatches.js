const axios = require("axios");

let rootUrl = "https://jsonplaceholder.typicode.com/posts?userId=";

// function* range(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i;
//   }
// }

let range = (size, startAt = 0) => {
    return [...Array(size).keys()].map(i => i + startAt);
}


let getBatchPosts = (results, users) => {

  results.forEach(result => {

    if (result.status == "fulfilled") {

      let posts = result.value;
      let [firstPost] = posts.data.slice(0, 1);
      let userName = users.data.find(user => user.id == firstPost.userId).name;

      console.log(`User: ${userName} published following posts: `);
      posts.data.forEach(post => console.log(post.title));

      console.log("\n");

    }

  });
};

(async () => {
  try {

    let users = await axios.get("https://jsonplaceholder.typicode.com/users");
    let totalUsers = users.data.length;
    let currentUserId = 1, batchSize;
    let promises;

    while (currentUserId <= totalUsers) {

      currentUserId = Math.min(currentUserId, totalUsers);
      //end = Math.min(start + 2, totalUsers);
      batchSize = Math.min(3, totalUsers - currentUserId);
      //promises = [...range(start, end)].map(id => axios.get(rootUrl + id));
      promises = range(batchSize, currentUserId).map(id => axios.get(rootUrl + id));
      let results = await Promise.allSettled(promises); 
      getBatchPosts(results, users);
      currentUserId += 3;

    }

  } 
  catch (error) {
    console.log(error);
  }
})();
