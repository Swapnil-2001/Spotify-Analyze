import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      setErrorMsg("");
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg("Please enter a search term.");
    }
  };
  return (
    <div className="main__div">
      <form onSubmit={handleSearch}>
        {errorMsg && <p>{errorMsg}</p>}
        <input
          type="text"
          placeholder="Search Track"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <input
          type="image"
          src="https://icon-library.com/images/search-icon-white-png/search-icon-white-png-18.jpg"
          alt="Search"
        />
      </form>
    </div>
  );
};

export default SearchForm;
