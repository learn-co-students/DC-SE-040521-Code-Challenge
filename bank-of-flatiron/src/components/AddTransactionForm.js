import React, { Component } from "react";

const baseURL = "http://localhost:6001/transactions/"

class AddTransactionForm extends Component {
  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  submitNewTransaction = (event) => {
    event.preventDefault()

    const newTransactionObj = {
      ...this.state
    }

    const reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(newTransactionObj)
    }

    fetch(baseURL, reqObj)
    .then(resp => resp.json())
    .then(submittedObj => {
      this.props.addNewTransaction(submittedObj)
      this.setState({
        date: '',
        description: '',
        category: '',
        amount: ''
      })
    })

  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.submitNewTransaction} className="ui form">
          <div className="inline fields">

            <input 
            value={this.state.date}
            onChange={(event) => this.setState({date: event.target.value})}
            type="date"
            name="date" />

            <input 
            value={this.state.description}
            onChange={(event) => this.setState({description: event.target.value})}
            type="text"
            name="description"
            placeholder="Description" />

            <input 
            value={this.state.category}
            onChange={(event) => this.setState({category: event.target.value})}
            type="text"
            name="category"
            placeholder="Category" />

            <input
              value={this.state.amount} 
              onChange={(event) => this.setState({amount: parseFloat(event.target.value)})}
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
