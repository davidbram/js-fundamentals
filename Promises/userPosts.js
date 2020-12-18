const { default: Axios } = require("axios");
const axios = require("axios");

(async () => {
  try {
    let users = await axios.get("https://jsonplaceholder.typicode.com/users");

    users.data.forEach((user) => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then((posts) => {
          console.log(`User name is : ${user.name}`);
          posts.data.forEach((post) => console.log(post.title));
          console.log("\n");
        })
        .catch((err) => console.log(err));
    });
  } catch (error) {
    console.log(error);
  }
})();
