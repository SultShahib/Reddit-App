import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { subredditActions } from "../../store/subredditSlice";
import { HiOutlineSearch } from "react-icons/hi";
import { FaReddit } from "react-icons/fa";
import "./header.css";

// Header Component consits of the logo and search bar

export default function Header() {
  const [searchTermLocal, setSearchTermLocal] = useState("");
  const searchTerm = useSelector((state) => state.subreddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  // SetSearchTermLocal with user input in input bar
  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);

  //  Dispatch to subredditSlice.setSearchTerm(searchTerm) to set the displayed posts according to the User input
  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(subredditActions.setSearchTerm(searchTermLocal));
  };
  return (
    <header>
      <div className="logo">
        <FaReddit className="logo-icon" />
        <p>Reddit</p>
      </div>
      <form className="search" onSubmit={onSearchTermSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTermLocal}
          onChange={onSearchTermChange}
          aria-label="Search posts"
        />
        <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
          <HiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
