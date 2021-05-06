import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const BASE_URL = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchText: ''
  }

  onSubmitForm = (event, trans) => {
    event.preventDefault()
    console.log(event.target, trans)
    // Post info to backend API && Add new transaction to table
    const postObj = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(trans)
    }

    fetch(BASE_URL, postObj)
      .then(res => res.json())
      .then(trans => this.setState({transactions: [...this.state.transactions, trans]}))
  }

  search = (text) => {
    this.setState({searchText: text})
  }

  // Filter takes current transactions, 
  //    filters based off of searchText,
  //    sends filtered trans to TransactionsList
  handleFilter = () => {
    const currentTransactions = this.state.transactions.filter(trans => trans.description.includes(this.state.searchText))
    return currentTransactions
  }

  componentDidMount() {
      // Fetch data
    fetch(BASE_URL)
      .then(res => res.json())
      .then(transactions => {
        this.setState({transactions})
      })
  }

  render() {
    return (
      <div>
        <Search search={this.search}/>
        <AddTransactionForm onSubmitForm={this.onSubmitForm}/>
        <TransactionsList transactions={this.handleFilter()}/>
      </div>
    );
  }
}

export default AccountContainer;
