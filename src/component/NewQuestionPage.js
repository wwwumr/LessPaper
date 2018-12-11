import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../assets/css/newProblem.css';

export default class NewQuestionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            insrt: '',
            msg: ''
        }
    }
    handelInsrt=(e)=>{
        this.setState({
            insrt: e.target.value
        })
    }

    handelMsg=(e)=>{
        this.setState({
            msg: e.target.value
        })
    }

    tempStore=()=>{}
    
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label className="form-lable" htmlFor="exampleInsrt">题目说明</label>
                        <br />
                        <textarea type="text" className="from-control col-md-12" onChange={this.handelInsrt} id="exampleInsrt" rows="5"></textarea>
                    </div>
                    <div className="form-group">
                        <label className="form-lable" htmlFor="exampleMsg">题目信息</label>
                        <br />
                        <textarea type="test" className="from-control col-md-12" onChange={this.handelMsg} id="exampleMsg" rows="5"></textarea>
                    </div>
                    <div className="form-group">
                        <label className="form-lable" htmlFor="exampleStuAns">学生答案提交</label>
                        <input type="file" className="from-control" id="exampleStuAns" />
                    </div>
                    <div className="form-group">
                        <label className="form-lable" htmlFor="exampleAns">正确答案提交</label>
                        <input type="file" className="from-control" id="exampleAns" />
                    </div>

                    {/* <a href="./judge.html">
                        <input type="button submit" className="btn btn-primary" value="暂存" />
                    </a>
                    <a href="./judge">
                        <input type="button submit" className="btn btn-primary" value="开始分析" />
                    </a> */}

                    <button className="btn btn-primary" onClick={this.tempStore}>暂存</button>
                    {/* <button type="submit" className="btn btn-primary">开始分析</button> */}
                    <Link to="./judge">
                        <button className="btn btn-primary">开始分析</button>
                        {/* <input type="button submit" className="btn btn-primary" value="开始分析" /> */}
                    </Link>
                </form>
            </div>
        )
    }
}
