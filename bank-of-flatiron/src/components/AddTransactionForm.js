import React, { Component } from "react";

class AddTransactionForm extends Component {


state={
  date: "",
  description: "",
  category: "",
  amount: 0,
}

sendTransaction = (e) => {
  e.preventDefault()

const reqObj = {
  headers:{"Content-Type": "application/json"},
  method:"POST",
  body: JSON.stringify({...this.state})
}
fetch("http://localhost:6001/transactions", reqObj)
.then( r => r.json())
.then((newTransaction) => {
  this.props.addTransaction(newTransaction)
  this.setState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  })
})

}

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.sendTransaction} className="ui form">
          <div className="inline fields">
            <input onChange={(e) => this.setState({date: e.target.value})}   type="date" name="date" />
            <input onChange={(e) => this.setState({description: e.target.value})}   type="text" name="description" placeholder="Description" />
            <input onChange={(e) => this.setState({category: e.target.value})}  type="text" name="category" placeholder="Category" />
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
