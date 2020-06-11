import React from "react";
import "./SearchBox.css";

export const SearchBox = ({ placerholder, handleChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={ placerholder }
        onChange={ handleChange }
      />
    </div>
  );
};
