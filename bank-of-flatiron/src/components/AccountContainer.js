import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const baseURL = "http://localhost:6001/transactions/"

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchText: '',
    sortBy: ''
  }

  componentDidMount(){
    fetch(baseURL)
    .then(resp => resp.json())
    .then(transactions => this.setState({transactions}))
  }

  searchTransactions = (text) => this.setState({searchText: text})

  filterTransacations = () => {
    const filteredTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchText.toLowerCase()))
    return filteredTransactions
  }

  addNewTransaction = (newObj) => this.setState({transactions: [...this.state.transactions, newObj]})

  deleteTransaction = (transactionObj) => {
    const updatedTransactions = this.state.transactions.filter(transaction => transaction.id !== transactionObj.id)

    const reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "DELETE",
      body: JSON.stringify(transactionObj)
    }

    fetch(baseURL+transactionObj.id, reqObj)
    .then(resp => resp.json())
    .then(this.setState({transactions: updatedTransactions}))
  }

  sortTransactions = (type) => {
    this.setState({sortBy: type})
    
    if (type === 'Description'){
      this.setState({sortBy: 'Description'})
      console.log("Sort by description")
      this.state.transactions.sort((trans1, trans2) => trans1.description > trans2.description ? 1 : -1)

    } else if (type === 'Category') {
      this.setState({sortBy: 'Category'})
      console.log("Sort by category")
      this.state.transactions.sort((trans1, trans2) => {
        if (trans1.category > trans2.category){
          return 1
        } else if (trans1.category < trans2.category){
          return -1
        } else {
          return 0
        }
      })
    }
  }

  render() {
    return (
      <div>
        <Search searchTransactions={this.searchTransactions} />
        <AddTransactionForm addNewTransaction={this.addNewTransaction} />
        <TransactionsList transactions={this.filterTransacations()} deleteTransaction={this.deleteTransaction} sortTransactions={this.sortTransactions} sortBy={this.state.sortBy} />
      </div>
    );
  }
}

export default AccountContainer;
