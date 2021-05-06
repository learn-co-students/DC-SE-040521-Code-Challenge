import React, { Component } from "react";

class AddTransactionForm extends Component {

  state ={
    amount: 0,
    category: "",
    date: "",
    description: ""
  }

    updateTransactions = (e) => {
      e.preventDefault()

      const reqObj = {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify({...this.state})
      }

      fetch("http://localhost:6001/transactions", reqObj)
        .then(res => res.json())
        .then(update => {
          this.props.addTransaction(update)
          this.setState({
            amount: 0,
            category: "",
            date: "",
            description: ""
          })
        })
    }

    render() {

    return (
      <div className="ui segment">
        <form
          onSubmit={this.updateTransactions}
          className="ui form">
          <div className="inline fields">
            <input
              type="date" 
              name="date" 
              onChange= {(e) => this.setState({date: e.target.value})}
              value={this.state.date}
            />
            <input 
              type="text" 
              name="description" 
              placeholder="Description" 
              onChange= {(e) => this.setState({description: e.target.value})}
              value={this.state.description}
            />
            <input 
              type="text" 
              name="category" 
              placeholder="Category" 
              onChange= {(e) => this.setState({category: e.target.value})}
              value={this.state.category}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange= {(e) => this.setState({amount: +e.target.value})}
              value={this.state.amount}
            />
          </div>
          <button 
            className="ui button" 
            type="submit"
            onSubmit={this.updateTransactions}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
