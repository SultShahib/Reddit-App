const API = "https://www.reddit.com";

export const getSubredditPost = async (subredditName) => {
  const fetchPost = await fetch(`${API}${subredditName}.json`);
  const json = await fetchPost.json();

  return json.data.children.map((post) => post.data);
};

export const getCommentsPost = async (permalink) => {
  const fetchComments = await fetch(`${API}${permalink}.json`);
  const json = await fetchComments.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};
