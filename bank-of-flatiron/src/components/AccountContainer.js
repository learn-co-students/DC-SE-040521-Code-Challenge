import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchText: ''
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(r => r.json())
    .then(transactions => this.setState({ transactions }))
  }

  addTransaction = transaction => this.setState({transactions: [transaction, ...this.state.transactions]})

  changeSearchText = (text) => this.setState({searchText: text})

  filterTransactions = () => this.state.transactions.filter(tran => tran.description.includes(this.state.searchText))

  render() {
    return (
      <div>
        <Search searchText={this.state.searchText} changeSearchText={this.changeSearchText} />
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.filterTransactions()} />
      </div>
    );
  }
}

export default AccountContainer;
