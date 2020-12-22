const axios = require("axios");

const rootUrl = "https://jsonplaceholder.typicode.com/posts";

// function* range(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i;
//   }
// }

const range = (size, startAt = 0) => {
  return [...Array(size).keys()].map((i) => i + startAt);
};

const getBatchPostTitles = ({ results, users, batchNo }) => {
  let userId;

  results.some((result) => result.status == "fulfilled") &&
    console.log(`Batch ${batchNo}`); // Print batch number only if user posts are available

  results.forEach((result) => {

    if (result.status == "fulfilled") {
      
      const posts = result.value;
      const [firstPost] = posts.data.slice(0, 1);
      userId = firstPost.userId;
      const userName = getUserNameById(users, userId);

      console.log(`User ${userId}: ${userName} published following posts: `);
      posts.data.forEach((post) =>
        console.log(`Post ${post.id}. Title: ${post.title}`)
      );
      console.log("\n");
    }

  });

  return { currentUserId: userId + 1, batchNo: batchNo + 1 };
};

const getUserNameById = (users, userId) => {
  return users.data.find((user) => user.id == userId).name;
};

const getUsers = async () => {
  const userResults = await axios.get("https://jsonplaceholder.typicode.com/users");
  const users = userResults.data;
  return users;
};

(async () => {

  try {
    let users = await getUsers();
    let totalUsers = users.data.length,
      currentUserId = 1,
      batchSize,
      promises,
      batchNo = 1;

    while (currentUserId <= totalUsers) {
      currentUserId = Math.min(currentUserId, totalUsers);
      // end = Math.min(currentUserId + 2, totalUsers);
      batchSize = Math.min(3, totalUsers - currentUserId + 1);
      // promises = [...range(currentUserId, end)].map(id => axios.get(rootUrl, {
      //   params: {
      //     userId: id
      //   }
      // }));
      promises = range(batchSize, currentUserId).map((id) =>
        axios.get(rootUrl, {
          params: {
            userId: id,
          },
        })
      );

      let results = await Promise.allSettled(promises);
      ({ currentUserId, batchNo } = getBatchPostTitles({
        results,
        users,
        batchNo,
      }));

    }

  } catch (error) {
    console.log(error);
  }

})();
