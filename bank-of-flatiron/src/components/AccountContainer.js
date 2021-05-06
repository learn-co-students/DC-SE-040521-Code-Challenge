import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  render() {

    return (
      <div>
        <Search handleSearch={this.props.handleSearch}/>
        <AddTransactionForm addTransaction={this.props.addTransaction}/>
        <TransactionsList transactions={this.props.transactions} deleteTransaction={this.props.deleteTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
