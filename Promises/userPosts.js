const axios = require("axios");

const postsUrl = `https://jsonplaceholder.typicode.com/posts`;
const usersUrl = "https://jsonplaceholder.typicode.com/users";

(async () => {
  try {
    const userResults = await axios.get(usersUrl);

    const users = userResults.data;

    const promises = users.map((user) =>
      axios.get(postsUrl, {
        params: {
          userId: user.id,
        },
      })
    );

    const postResults = await Promise.all(promises);
    const allPosts = postResults.map((post) => post.data).flat();

    users.map((user) => {
      console.log(`\nUser id:${user.id}. User name is : ${user.name}`);
      let userPosts = allPosts.filter((post) => user.id == post.userId);
      userPosts.map((post) =>
        console.log(`Post: ${post.id}. Title: ${post.title}`)
      );
    });
  } catch (error) {
    console.log(error);
  }
})();
