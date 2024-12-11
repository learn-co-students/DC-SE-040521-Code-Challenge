import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: 0,
    transactions: [],
    searchText:""
  };
  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then((res) => res.json())
      .then((transactions) => this.setState({ transactions: transactions }));
  }

  addTransaction = (transaction) =>
    this.setState({ transactions: [...this.state.transactions, transaction] });

  searchText = (text) => {
    this.setState({
      searchText: text,
    });
  };

  findTransaction = () => {
    const filterTransaction = this.state.transactions.filter((transaction) =>
      transaction.description.includes(this.state.searchText)
    );
    console.log("wtf");
    console.log(filterTransaction);
    return filterTransaction;
  };

  render() {
    
    return (
      <div>
        <Search searchText={this.searchText} />
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList
          transactions={this.state.transactions}
          filterTransaction={this.findTransaction()}
        />
      </div>
    );
  }
}

export default AccountContainer;
