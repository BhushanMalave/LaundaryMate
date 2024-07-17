import React from 'react'
import './SearchInput2.css'
const SearchInput2 = ({placeholderText,style}) => {
  return (
    <div className="search-input2-container" style={style}>
    <input
      type="text"
      className="search-input2-text-input"
      placeholder={placeholderText}    
    />
    <img
      className="search-input2-icon"
      src={require("../../images/search.png")}
      alt="search-icon"
    />
  </div>
  )
}

export default SearchInput2
