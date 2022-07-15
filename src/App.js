import { Fragment } from "react";
import Header from "./components/Header/header";
import MainContainer from "./components/main/mainContainer";
import SubredditSection from "./components/subreddits/subredditSection";
import "./App.css";

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
