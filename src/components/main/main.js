import React from "react";
import classes from "./main.module.css";
import Footer from "../postFooter/footer";
import Border from "../borderDivision/border";

export default function Main({
  author,
  comments,
  image,
  title,
  id,
  permalink,
}) {
  return (
    <div className={classes.main}>
      <h2 className={classes.main_title}>{title}</h2>
      {<img src={image} alt={"nuff said"} className={classes.image} />}
      <Border />
      <Footer
        title={author}
        comments={comments}
        id={id}
        permalink={permalink}
      />
    </div>
  );
}
