import React from "react";
import Transaction from "./Transaction";

const TransactionsList = ({ transactions, deleteTransaction, sortTransactions, sortBy }) => {
  return (
    <table className="ui celled striped padded table">

      <thead>
        <tr>
          <th colSpan="1"> 
            <label>Sort Stocks by:</label>
          </th>
          <th colSpan="1">
            <input type='radio' value='Description' checked={sortBy === 'Description'} onChange={(event) => sortTransactions(event.target.value)}/>
          </th>
          <th colSpan="1">
            <input type='radio' value='Category' checked={sortBy === 'Category'} onChange={(event) => sortTransactions(event.target.value)}/>
          </th>
          <th colSpan="1">
          </th>
          <th colSpan="1">
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Remove?</h3>
          </th>
        </tr>
        {transactions.map(transaction => <Transaction transaction={transaction} key={transaction.id} deleteTransaction={deleteTransaction} />)}
      </tbody>

    </table>
  );
};

export default TransactionsList;
