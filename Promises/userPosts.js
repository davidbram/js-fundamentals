const axios = require("axios");

(async () => {

  try {

    let userResults = await axios.get("https://jsonplaceholder.typicode.com/users");

    let users = userResults.data;

    users.forEach(user => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then(postResults => {
          console.log(`User name is : ${user.name}`);
          let posts = postResults.data;
          posts.forEach(post => console.log(post.title));
          console.log("\n");
        })
        .catch(err => console.log(err));
    });

  } catch (error) {
    console.log(error);
  }
})();
