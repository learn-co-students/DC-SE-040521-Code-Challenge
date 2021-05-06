import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
import TransactionsList from "./TransactionsList";

const BASE_URL="http://localhost:6001/transactions/"

class App extends Component {

  state = {
    transactions: [],
    searchBar: ""
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(r => r.json())
      .then(transData => this.setState({transactions: transData}))
  }

  handleSearch = (data) => {
   this.setState({
     searchBar: data})
  }

  addTransaction = (newTrans) => {
    this.setState({
      transactions: [newTrans, ...this.state.transactions]
    })
  }

  deleteTransaction = (targetObj) => {
    const newTransactions = this.state.transactions.filter(transaction => transaction.id !== targetObj.id)
    this.setState({
      transactions: newTransactions
    })

    fetch(BASE_URL+targetObj.id, {method: "DELETE"})
      .then(() => this.setState({
        transactions: newTransactions
      }))
  }

  render() {

    const searchFilter = this.state.transactions.filter((filtered) => filtered.description.includes(this.state.searchBar))

    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer 
          transactions={searchFilter}
          handleSearch={this.handleSearch}
          addTransaction={this.addTransaction}
          deleteTransaction={this.deleteTransaction}
        />
      </div>
    );
  }
}

export default App;
