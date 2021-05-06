import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


const API = "http://localhost:6001/transactions/"

class AccountContainer extends Component {

state = {
  searchText: "",
  transactions: []
}

componentDidMount() {
  fetch (API)
  .then (res => res.json())
  .then (transactions => this.setState({transactions: transactions}))

}

// changeToTransactions = () => {
//   this.setState({display: "Transactions"})
// }

readSearchText = (text) => this.setState({searchText: text})

filterTransactions = () => {
  const nowFiltered = this.state.transactions.filter(transactions => transactions.description.includes(this.state.searchText))
  return nowFiltered
}

addTransaction = (newTr) => this.setState({transactions: [newTr, ...this.state.transations]}) 

// deleteTransaction = (singleTr) => {
//   const deleteMe = this.state.transactions.filter(transactions => transactions.id !== singleTr.id)
//   this.setState({transactions: deleteMe})
// }

  render() {
    // console.log(this.filterTransactions)
    return (
      <div>
        <Search readSearchText={this.readSearchText} />
        <AddTransactionForm addNewTr={this.state.addNewTr} />
        <TransactionsList transactions={this.filterTransactions()} addTransaction={this.addTransaction} /> 
      </div>
    );
  }
}
//deleteTransaction={this.deleteTransaction} 

export default AccountContainer;
