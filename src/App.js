import { Fragment } from "react";
import Card from "./components/card/card";
import Header from "./components/Header/header";
import MainContainer from "./components/main/mainContainer";
import "./App.css";
import SubredditSection from "./subreddits/subredditSection";

function App() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <MainContainer />
      </main>
      <aside>
        <SubredditSection />
      </aside>
    </Fragment>
  );
}

export default App;
