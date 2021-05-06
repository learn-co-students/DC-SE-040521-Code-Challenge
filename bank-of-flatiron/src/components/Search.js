import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => { props.handleSearch(e.target.value)
          console.log("Searching...");
        }}
      />

      <strong>Sort by:</strong>
      <label>
        <input  id ="Abc" type="radio" value="Alphabetically" checked={null} onChange={props.sortABC}/>
        Alphabetically
      </label>
      <label>
        <input id="Cat" type="radio" value="Category" checked={null} onChange={props.sortCategory}/>
        Category
      </label>
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
