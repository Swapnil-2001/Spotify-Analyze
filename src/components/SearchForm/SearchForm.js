import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleSearch}>
        {errorMsg && <p>{errorMsg}</p>}
        <input type="text" value={searchTerm} onChange={handleInputChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchForm;
