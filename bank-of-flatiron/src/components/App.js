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

deleteTrans = (clicked) => {
  console.log(clicked)
  const x = this.state.transactions.filter(ele => ele.id !== clicked.id)
  // this.setState({
  //    transactions: x
//  })

  fetch("http://localhost:6001/transactions/" + clicked.id, 
    {method: "DELETE"}
    )
    .then(() => this.setState({
    transactions: x
}))

}


  render() {
    const searchedText = this.state.transactions.filter(ele => ele.description.includes(this.state.searchText))
    console.log(this.state.transactions)
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions = {searchedText} updateSearchText = {this.updateSearchText} addTrans = {this.addTrans} deleteTrans = {this.deleteTrans}/>
      </div>
    );
  }
}

export default App;
