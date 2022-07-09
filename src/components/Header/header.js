import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { subredditActions } from "../../store/subredditSlice";
import { HiOutlineSearch } from "react-icons/hi";
import { FaReddit } from "react-icons/fa";
import "./header.css";

// This component consits of the logo and search bar

export default function Header() {
  const [searchTermLocal, setSearchTermLocal] = useState("");
  const searchTerm = useSelector((state) => state.subreddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  // set search term eveytime a word is typed into search bar
  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);

  // That word is dispatched to set the post displayed according to the word searched
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
