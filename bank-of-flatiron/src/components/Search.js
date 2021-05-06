import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => {props.handleSearch(e.target.value)}}
      />
      
      <strong>Sort by:</strong>
      <label>
        <input 
          type="radio" 
          value="Date" 
          checked={props.sort === "Date"} 
          onChange={(e) => props.changeSort(e.target.value)}
          />
        Date
      </label>
      <label>
        <input 
          type="radio" 
          value="Description" 
          checked={props.sort === "Description"} 
          onChange={(e) => props.changeSort(e.target.value)}
          />
        Description
      </label>
      <label>
        <input 
          type="radio" 
          value="Category" 
          checked={props.sort === "Category"} 
          onChange={(e) => props.changeSort(e.target.value)}
         />
        Category
      </label>
      <label>
        <input 
          type="radio" 
          value="Amount" 
          checked={props.sort === "Amount"} 
          onChange={(e) => props.changeSort(e.target.value)}
         />
        Amount
      </label>

    </div>
  );
};

export default Search;
