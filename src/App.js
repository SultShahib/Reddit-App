import { Fragment } from "react";
import Card from "./components/card/card";
import Post from "./components/Header/header";
import MainContainer from "./components/main/mainContainer";
import "./App.css";

function App() {
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
