import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    id:"",
    date: "",
    description: "",
    category: "",
    amount: 0
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const tmp = {...this.state}
    const reqObj = {
        headers: {"Content-type": "application/json"},
        method: "POST",
        body: JSON.stringify(tmp)
    }

    fetch("http://localhost:6001/transactions/", reqObj)
    .then(r => r.json())
    .then(data => this.props.addTransaction(data))
}

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="inline fields">
            <input onChange={(e) => this.handleChange(e)} type="date" name="date" value={this.state.date}/>
            <input onChange={(e) => this.handleChange(e)} type="text" name="description" placeholder="Description" value={this.state.description}/>
            <input onChange={(e) => this.handleChange(e)} type="text" name="category" placeholder="Category" value={this.state.category}/>
            <input
              onChange={(e) => this.handleChange(e)}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
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
