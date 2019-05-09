import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './Navbar';
import SigninPage from './SigninPage';
import NewQuestionPage from './NewQuestionPage';
import JudgeItem from './JudgeItem';
import ResultPage from './ResultPage';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,//登录状态默认设置为false
      account: "admin"
    }
  }

  handelSignin = () => {
    this.setState({
      login: true
    })
  }

  handelSignout = () => {
    this.setState({
      login: false
    })
    //TODO: 这里还应该添加功能，比如清除上一个用户的数据
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Navbar login={this.state.login} username={this.state.account} signout={this.handelSignout} />
            {!this.state.login && <Route exact path="/" render={props => <SigninPage login={this.state.login} signin={this.handelSignin} />} />}
            {this.state.login && <Route path="/newprob" component={NewQuestionPage} />}
            <Route path="/judge" component={JudgeItem} />
            <Route path="/result" component={ResultPage}/>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
