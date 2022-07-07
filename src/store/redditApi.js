const API = "https://www.reddit.com";

const getSubredditPost = async (subreddit) => {
  const fetchPost = await fetch(`${API}${subreddit}`);
  const json = await fetchPost.json();

  return json.data.children.map((post) => post.data);
};
