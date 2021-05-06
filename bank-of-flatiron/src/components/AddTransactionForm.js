import React, { Component } from "react";

class AddTransactionForm extends Component {
  state ={
    date: 0,
    description: "",
    category: "",
    amount: 0,
    
}
sendTransactionToServerAndState =(e)=>{
e.preventDefault()
const reqObj = {
  headers: {"Content-Type": "application/json"},
  method:  "POST",
  body: JSON.stringify({...this.state})
}
fetch("http://localhost:6001/transactions" , reqObj)
.then(res => res.json() )
.then((newTransaction => this.props.addTransaction(newTransaction)))
}
  render() {
    return (
      <div className="ui segment">
        <form onSubmit= {this.sendTransactionToServerAndState} className="ui form">
          <div className="inline fields">
            <input value = {this.state.date} onChange={(e)=> this.setState({date: e.target.value})} type="date" name="date" />
            <input value = {this.state.description} onChange={(e)=> this.setState({description: e.target.value})} type="text" name="description" placeholder="Description" />
            <input value = {this.state.category} onChange={(e)=> this.setState({category: e.target.value})} type="text" name="category" placeholder="Category" />
            <input
            value = {this.state.amount} onChange={(e)=> this.setState({amount: e.target.value})} 
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
