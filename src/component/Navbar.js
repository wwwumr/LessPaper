import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../assets/css/navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: this.props.login,
            username:this.props.username
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="navbar-header">
                        <button type='button' className="navbar-toggle collapsed" data-target="#navbar" aria-expanded="false"
                            aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand">
                            <span className="glyphicon glyphicon-file"></span>LessPaper
                        </a>
                    </div>

                    <div id="navbar" className="collapse navbar-collapse">
                        {
                            this.props.login ?
                                (
                                    <ul className="nav navbar-nav">
                                        <li>
                                            <Link to="/home">主页</Link>
                                        </li>
                                        <li>
                                            <Link to="/newprob">新建问题</Link>
                                        </li>
                                        <li>
                                            <Link to="/history">历史记录</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">联系我们</Link>
                                        </li>
                                    </ul>
                                ) :
                                (
                                    <ul className="nav navbar-nav">
                                        <li className="active">
                                            <Link to="/">主页</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">联系我们</Link>
                                        </li>
                                    </ul>
                                )
                        }
                        {
                            this.props.login ?
                                (
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="dropdown">
                                            <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                                aria-expanded="false">欢迎回来,<i>{this.state.username}!</i>
                                                <span className="caret"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link to="/settings">设置</Link>
                                                </li>
                                                <li>
                                                    <Link to="/" onClick={this.props.signout}>注销</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                ) :
                                (
                                    <ul className="nav navbar-nav navbar-right">
                                        <li>
                                            <Link to="/">请登录</Link>
                                        </li>
                                    </ul>
                                )
                        }
                    </div>
                </nav>
            </div>
        )
    }
}
