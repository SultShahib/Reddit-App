import React from "react";
import classes from "./main.module.css";
import Footer from "../postFooter/Comments";
import Border from "../borderDivision/border";
import Comment from "../postFooter/Comments";

export default function Main({
  author,
  comments,
  numComments,
  image,
  title,
  postItem,
  id,
  permalink,
  onToggleComments,
}) {
  return (
    <div className={classes.main}>
      <h2 className={classes.main_title}>{title}</h2>
      {<img src={image} alt={"nuff said"} className={classes.image} />}
      <ul className={classes.footer}>
        <li className={classes.author}>{author}</li>
        <li
          className={classes.comments}
          onClick={() => onToggleComments(postItem.permalink)}
        >
          {numComments}
        </li>
      </ul>
      {postItem.showingComments ? (
        postItem.comments.map((item) => {
          return (
            <Comment
              author={item.author}
              post={item}
              comment={item.body}
              key={item.id}
              body={item.body}
            />
          );
        })
      ) : (
        <p>nothing</p>
      )}
      <Border />
    </div>
  );
}
