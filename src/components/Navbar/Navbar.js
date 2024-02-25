import React from "react";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-search">
          <svg
            className="bi bi-search search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input className="search-input" type="text" />
        </div>

        <a href="/">Categories</a>
        <a href="/">website builders</a>
        <a href="/">Today's Deals</a>
      </div>
    </div>
  );
}

export default Navbar;
