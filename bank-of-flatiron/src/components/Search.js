import React from "react";

const Search = ({ searchTransactions }) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(event) => searchTransactions(event.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
