import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

state = {
  transactions: [],
  searchText: []
}


componentDidMount(){
  fetch('http://localhost:6001/transactions')
  .then(res => res.json())
  .then(data => this.setState({
    transactions: data
  }))
}

updateSearchText = (text) => {
  this.setState({
    searchText: text
  })
}

addTrans = (trans) => {
  this.setState({
    transactions: [...this.state.transactions, trans]
  })
}


  render() {
    const searchedText = this.state.transactions.filter(ele => ele.description.includes(this.state.searchText))
    console.log(searchedText)
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions = {searchedText} updateSearchText = {this.updateSearchText} addTrans = {this.addTrans}/>
      </div>
    );
  }
}

export default App;
