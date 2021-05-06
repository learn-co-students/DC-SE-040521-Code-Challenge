import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";


class App extends Component {

  state = {

    searchText: "",
    accounts: []
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions/")
    .then(r => r.json())
    .then(data => {
      this.setState({
        accounts: data
      })
    })
  }

  changeSearchText = (text) => {
    this.setState({
      searchText: text
    })
  }

  filterAccount = () => this.state.accounts.filter(account => account.description.includes(this.state.searchText)); //fix lowercase

  addTransaction = transaction => this.setState({accounts: [transaction, ...this.state.accounts]})


  render() {
    // console.log(this.state.accounts)
    return (
      
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer accounts={ this.filterAccount()/*this.state.accounts */} changeSearchText={this.changeSearchText} addTransaction={this.addTransaction}/>
      </div>
    );
  }
}

export default App;
