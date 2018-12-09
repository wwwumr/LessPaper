import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from './Navbar';
import SigninPage from './SigninPage';
import NewQuestionPage from './NewQuestionPage';
import JudgeItem from './JudgeItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: true,
      account: ''
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar login={this.state.login} />
            {/* {!this.state.login && <SigninPage login={this.state} />} */}
            <Route path="/home" render={props=><SigninPage login={this.state.login}/>}/>
            <Route path="/signin" render={props=><SigninPage login={this.state.login}/>}/>
            <Route path="/newprob" component={NewQuestionPage}/>
            <Route path ="/judge" component={JudgeItem}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
