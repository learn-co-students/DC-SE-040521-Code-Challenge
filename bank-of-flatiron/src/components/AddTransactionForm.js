import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: 0
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // send to Account container
    this.props.onSubmitForm(event, this.state)
    // reset state within this component
    this.setState({
      date: '',
      description: '',
      category: '',
      amount: 0
    })
    // reset fields
    event.target.children[0].children[0].value = ""   // date
    event.target.children[0].children[1].value = ""   // description
    event.target.children[0].children[2].value = ""   // category
    event.target.children[0].children[3].value = ''   // amount
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" onChange={(e)=>this.setState({date: e.target.value})}/>
            <input type="text" name="description" onChange={(e)=>this.setState({description: e.target.value})} placeholder="Description" />
            <input type="text" name="category" onChange={(e)=>this.setState({category: e.target.value})} placeholder="Category" />
            <input
              type="number"
              name="amount"
              onChange={(e)=>this.setState({amount: e.target.value})}
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
