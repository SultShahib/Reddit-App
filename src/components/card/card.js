import React from "react";
import classes from "./card.module.css";

export default function Card({ children }) {
  return <div className={classes.card}>{children}</div>;
}