import React from "react";
import "../search_input/SearchInput.css";

const SearchInput = ({ placeholderText, style = {} }) => {
  return (
    <div className="search-input-container" style={{ ...style }}>
      <input
        type="text"
        className="search-text-input"
        placeholder={placeholderText}
      />
      <div className="search-icon">
        <img
          className="search-icon1"
          src={require("../../images/search.png")}
          alt="search-icon"
        />
      </div>
    </div>
  );
};

export default SearchInput;
