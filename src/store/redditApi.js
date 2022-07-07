const API = "https://www.reddit.com";

const getSubredditPost = async (subreddit) => {
  const fetchPost = await fetch(`${API}${subreddit}`);
  const json = await fetchPost.json();
<<<<<<< Updated upstream
=======
  console.log("I am an absolute Conquerer");
  console.log("No i am !!! absolute Conquerer");
>>>>>>> Stashed changes

  return json.data.children.map((post) => post.data);
};
