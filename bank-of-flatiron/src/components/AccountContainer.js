import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search changeSearchText={this.props.changeSearchText}  />
        <AddTransactionForm addTransaction={this.props.addTransaction} />
        <TransactionsList  accounts = {this.props.accounts} />
        {/* {this.props.accounts.map(account => <TransactionsList key={account.key} accountData={account} />)} */}
        
      </div>
    );
  }
}

export default AccountContainer;
