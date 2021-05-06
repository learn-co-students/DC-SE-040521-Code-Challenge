import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
import TransactionsList from "./TransactionsList";

const BASE_URL="http://localhost:6001/transactions/"

class App extends Component {

  state = {
    transactions: [],
    searchBar: "",
    sort: ""
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

  changeSort = (sort) => this.setState({sort})

  sortDescription = () => {
    let displayDescription = this.state.transactions.filter((filtered) => filtered.description.includes(this.state.searchBar))
   
    if(this.state.sort === "Description"){
      return displayDescription.sort((transaction1, transaction2) => transaction1.description > transaction2.description ? 1 : -1)
    } else if(this.state.sort === "Category"){
      return displayDescription.sort((transaction1, transaction2) => transaction1.category > transaction2.category ? 1 : -1)
    } else if(this.state.sort === "Amount"){
      return displayDescription.sort((transaction1, transaction2) => transaction1.amount > transaction2.amount ? 1 : -1)
    } else if(this.state.sort === "Date"){
      return displayDescription.sort((transaction1, transaction2) => transaction1.date < transaction2.date ? 1 : -1)
    }else{
      return displayDescription
    }
  }


  render() {

    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer 
          transactions={this.sortDescription()}
          handleSearch={this.handleSearch}
          addTransaction={this.addTransaction}
          deleteTransaction={this.deleteTransaction}
          sort={this.state.sort}
          changeSort={this.changeSort}
        />
      </div>
    );
  }
}

export default App;
