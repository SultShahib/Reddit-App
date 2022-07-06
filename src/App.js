import { Fragment, useState } from "react";
import Card from "./components/card/card";
import Post from "./components/Header/header";
import Main from "./components/main/main";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getRedditData from "./store/subredditApi";
import MainContainer from "./components/main/mainContainer";

function App() {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Card>
        <Post />
      </Card>
      <MainContainer />
    </Fragment>
  );
}

export default App;
