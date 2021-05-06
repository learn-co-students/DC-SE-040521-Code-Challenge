import React, { Component } from "react";

const API = "http://localhost:6001/transactions/"

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }

  submitTransaction = (e) => {
    e.preventDefault()

    const newTransaction = {
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount
    }

    const reqObj = {}
    reqObj.headers = {"Content-Type": "application/json"}
    reqObj.method = "POST"
    reqObj.body = JSON.stringify(newTransaction)


    fetch(API, reqObj)
    .then(r => r.json())
    .then(newTrans => 
      this.props.addTransaction(newTrans),
      this.setState({
        date: "",
        description:"",
        category: "",
        amount: 0
      }))}
  
 

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.submitTransaction} className="ui form">
          
          <div className="inline fields">
            <input onChange={(e) => this.setState({date: e.target.value})} type="date" name="date" />
            <input onChange={(e) => this.setState({description: e.target.value})} type="text" name="description" placeholder="Description" />
            <input onChange={(e) => this.setState({category: e.target.value})} type="text" name="category" placeholder="Category" />
            <input
              onChange={(e) => this.setState({amount: e.target.value})}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
