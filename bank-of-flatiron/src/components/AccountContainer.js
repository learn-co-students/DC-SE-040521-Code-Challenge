import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const baseURL = "http://localhost:6001/transactions/"

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchText: ""
  }

  componentDidMount(){
    fetch(baseURL)
    .then(resp => resp.json())
    .then(transactions => this.setState({transactions}))
  }

  searchTransactions = (text) => {
    this.setState({
      searchText: text
    })
  }

  filterTransacations = () => {
    const filteredTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchText.toLowerCase()))
    return filteredTransactions
  }

  addNewTransaction = (newObj) => {
    this.setState({
      transactions: [...this.state.transactions, newObj]
    })
  }

  render() {

    return (
      <div>
        <Search searchTransactions={this.searchTransactions} />
        <AddTransactionForm addNewTransaction={this.addNewTransaction} />
        <TransactionsList transactions={this.filterTransacations()} />
      </div>
    );
  }
}

export default AccountContainer;
