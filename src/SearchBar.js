import React from "react";
import "./SearchBar.css";
import {Link} from 'react-router-dom';

function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="SearchBar__input">
        <input type="text" placeholder="What are you looking for ?" />
      </div>
      <div className="SearchBar__input">
        <select>
          <option value="area">Select Area</option>
          <option value="">Delhi</option>
          <option value="">Mumbai</option>
          <option value="">Hyderabad</option>
          <option value="">Bangluru</option>
        </select>
      </div>
      <div className="SearchBar__input">
        <select>
          <option value="area">Select Category</option>
          <option value="">Software Engineer</option>
          <option value="">Teaching</option>
          <option value="">Medical</option>
        </select>
      </div>
      <div className="SearchBar__input">
      <button><Link exact to="/categeory" activeClassName="activeClass">Search</Link></button>
      </div>
    </div>
  );
}

export default SearchBar;
