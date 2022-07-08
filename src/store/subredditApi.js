import { subredditActions } from "./subredditSlice";
import { useSelector } from "react-redux";
import { getSubredditPost } from "./redditApi";
import { getCommentsPost } from "./redditApi";

export default function getSubredditPosts(subredditName) {
  return async (dispatch) => {
    try {
      dispatch(subredditActions.loadingPostData());
      const subPost = await getSubredditPost(subredditName);

      const subredditPostData = subPost.map((data) => ({
        ...data,
        showingComments: false,
        comments: [],
        loadingComments: false,
        errorComments: false,
      }));

      dispatch(subredditActions.loadedPostData(subredditPostData));
    } catch (err) {
      dispatch(subredditActions.errorLoadingPost());
    }
  };
}

export function getSubredditComments(index, permalink) {
  return async (dispatch) => {
    try {
      dispatch(subredditActions.loadingComments(index));
      const subredditComments = await getCommentsPost(permalink);
      dispatch(
        subredditActions.loadedPostComments({ index, subredditComments })
      );
    } catch (err) {
      dispatch(subredditActions.errorLoadingComments(index));
    }
  };
}

// export default function getRedditData(subredditName) {
//   return async (dispatch) => {
//     const getReddit = async () => {
//       dispatch(subredditActions.loadingData());
//       const fetchReddit = await fetch(
//         `https://www.reddit.com/r/pics/${subredditName}.json`
//       );

//       if (!fetchReddit.ok) {
//         throw new Error("failed to extract data");
//       }

//       const subreddit = await fetchReddit.json();
//       return subreddit;
//     };
//     const subredditData = await getReddit();
//     dispatch(subredditActions.loadedData());

//     try {
//       const getData = subredditData.data.children.map((item) => item.data);

//       const postId = getData.map((item) => item.id);

//       dispatch(subredditActions.getPostsId({ postId }));
//       dispatch(subredditActions.getPosts({ getData }));
//     } catch (err) {
//       throw new Error(err);
//     }
//   };
// }

// export function getPostComments(permalink) {
//   return async (dispatch) => {
//     dispatch(subredditActions.loadingComments());
//     const fetchComments = await fetch(
//       `https://www.reddit.com${permalink}.json`
//     );

//     if (!fetchComments.ok) {
//       throw new Error("failed to extract data");
//     }

//     const redditComments = await fetchComments.json();
//     dispatch(subredditActions.loadedComments());

//     try {
//       const subComments = redditComments.map((item) => item.data.children);
//       const subcom = subComments.map((item, index) =>
//         item[index].data ? item[index].data : item[index]
//       );

//       const subredditComments = subcom[1];
//       dispatch(subredditActions.getComments({ subredditComments }));
//     } catch (err) {
//       throw new Error(err);
//     }
//   };
// }
// export function getPostComments(permalink) {
//   return async (dispatch) => {
//     const getRedditComments = async () => {
//       dispatch(subredditActions.loadingComments());
//       const fetchComments = await fetch(
//         `https://www.reddit.com${permalink}.json`
//       );

//       if (!fetchComments.ok) {
//         throw new Error("failed to extract data");
//       }

//       const redditComments = await fetchComments.json();
//       return redditComments;
//     };
//     const subredditData = await getRedditComments();
//     dispatch(subredditActions.loadedComments());

//     try {
//       const subComments = subredditData.map((item) => item.data.children);
//       const subcom = subComments.map((item, index) =>
//         item[index].data ? item[index].data : item[index]
//       );

//       const subredditComments = subcom[1];
//       dispatch(subredditActions.getComments({ subredditComments }));
//     } catch (err) {
//       throw new Error(err);
//     }
//   };
// }
