import React, { Component } from 'react';
import '../assets/css/signin.css';

export default class SigninPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            identity: 1,
            login: this.props.login
        }
    };
    handelForm = (e) => {
        e.preventDefault();
        if (!this.state.login) {
            this.setState({
                login: !this.state.login
            })
        }
    }

    handelAccount = (e) => {
        this.setState({
            account: e.target.value
        })
    }

    handelPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handelID = (e) => {
        this.setState({
            identity: e.target.value
        })
    }

    debug = () => {
        console.log(this.state.account, this.state.password, this.state.identity, this.state.login);

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-7">
                        <p style={{ "fontSize": "100px", "paddingLeft": "120px", "paddingTop": " 180px" }}>LessPaper</p>
                        <p style={{ "fontSize": "25px", "paddingTop": "20px", "paddingLeft": "120px" }}>基于人工智能的辅助阅卷系统</p>
                    </div>

                    <div className="col-md-4">
                        <form className="form-signin" onSubmit={this.handelForm}>
                            <h2 className="form-signin-heading">请登录</h2>
                            <label htmlFor="inputEmail" className="sr-only">账号</label>
                            <input id="inputEmail" className="form-control" onChange={this.handelAccount} placeholder="账号" required autoFocus />
                            <label htmlFor="inputPassword" className="sr-only">密码</label>
                            <input type="password" id="inputPassword" className="form-control" onChange={this.handelPassword} placeholder="密码" required />
                            <div className="radio-inline">
                                <label style={{ "paddingRight": "80px", "paddingTop": "10px", "paddingBottom": "10px" }}>
                                    <input type="radio" name="identity" value="1" checked={this.state.identity == 1} onChange={this.handelID} />老师
            </label>
                                <label>
                                    <input type="radio" name="identity" value="2" checked={this.state.identity == 2} onChange={this.handelID} />学生
            </label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.debug}>登录</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}
