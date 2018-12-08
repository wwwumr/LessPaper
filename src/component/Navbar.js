import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../assets/css/navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: this.props.login
        }
    }

    handleClick = () => {
        if (this.state.login)
            alert("已经登录啦！");
        else
            alert("还没登录哦");
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
                            this.state.login ?
                                (
                                    <ul className="nav navbar-nav">
                                        <li className="active">
                                            <Link to="/homeSignin">主页</Link>
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
                                            <Link to="/home">主页</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">联系我们</Link>
                                        </li>
                                    </ul>
                                )
                        }
                        {
                            this.state.login ?
                                (
                                    <ul class="nav navbar-nav navbar-right">
                                        <li class="dropdown">
                                            <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                                aria-expanded="false">欢迎回来,<i>username!</i>
                                                <span class="caret"></span>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a href="/settings">设置</a>
                                                </li>
                                                <li>
                                                    <a href="/signout">注销</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                ) :
                                (
                                    <ul className="nav navbar-nav navbar-right">
                                        <li>
                                            <Link to="/signin">请登录</Link>
                                        </li>
                                    </ul>
                                )
                        }
                    </div>
                </nav>
                <br />
                <hr />

                <button onClick={this.handleClick}>按钮测试props</button>
            </div>
        )
    }
}
