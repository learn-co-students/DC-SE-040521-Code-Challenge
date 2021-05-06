import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = "http://localhost:6001/transactions/"
class AccountContainer extends Component {

  state = {
    transaction: [],
    searchText: ""
  }

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then(transaction => this.setState({transaction: transaction}))
  }
  addTransaction = (transaction) => {
    this.setState({transaction: [...this.state.transaction, transaction]})
    console.log(transaction)
  }

  handleSearch = (data) => {
    this.setState({searchText:data})
  }

  sortABC = (e) => {
    this.setState({
      transaction: this.state.transaction.sort((a,b) => (a.description > b.description) ? 1 : -1 )
    })
    document.getElementById("Cat").checked = false
  }

  sortCategory = (e) => {
    this.setState({
      transaction: this.state.transaction.sort((a,b) => (a.category >b.category) ? 1 : -1)
    })
    document.getElementById("Abc").checked = false
  }

  // deleteTransaction = (transId) => {

  //   fetch(API+transId, {method: "DELETE"})
  //   .then(() => {
  //     const newTrans= this.state.transaction.filter(trans => trans.id !== transId)
  //     this.setState({
  //       transaction: newTrans
  //     })
  // })}

  render() { 

    const filteredTransactions = this.state.transaction.filter(trans => trans.description.toLowerCase().includes(this.state.searchText))
    return (
      <div>
        <Search searchText={this.state.searchText} 
        transaction={this.state.transaction} 
        handleSearch={this.handleSearch}  
        sortABC={this.sortABC} 
        sortCategory={this.sortCategory}/>
        <AddTransactionForm 
        transaction={this.state.transaction}  
        addTransaction={this.addTransaction}/>
        <TransactionsList transaction={filteredTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
