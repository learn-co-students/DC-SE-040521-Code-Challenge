import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
 
  state = {
    searchTransactions: "",
    transactions: []
  }
  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(res => res.json())
    .then(transactions => this.setState({
      transactions: transactions}
      ))
    
  }
  changeSearchTransactions =(text)=>{
    this.setState({
      searchTransactions: text
    })
  }
  filterTranscations=()=>{
    const allFiltered = this.state.transactions.filter(transactionObj => transactionObj.description.includes(this.state.searchTransactions))
    return allFiltered
  }
  addTransaction = transactionObj => this.setState({
    transactions: [...this.state.transactions, transactionObj]
    })
  render() {
    //console.log(this.filterTranscations())
    return (
      <div>
        
        <Search changeSearchTransactions ={this.changeSearchTransactions}/>
        
        {this.state.transactions.map(transaction => <TransactionsList 
        transactions={this.filterTranscations()}
        
         key ={transaction.id}
         transactionprop ={transaction}
         />)}
         <AddTransactionForm addTransaction ={this.addTransaction} />
        
      </div>
    );
  }
}

export default AccountContainer;
