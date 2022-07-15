import React from "react";
import "./cardStyles.css";

// Card for individual Posts
export default function Card({ children }) {
  return <div className="card">{children}</div>;
}
