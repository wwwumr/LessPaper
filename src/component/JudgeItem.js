import React, { Component } from 'react';
import '../assets/css/judge.css';

export default class JudgeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grade: 0,
            minGrade: 0,
            maxGrade: 100,
            next: '',
            prev: ''
        }
    }

    handelGrade = (e) => {
        this.setState({
            grade: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <img src="img/img1.jpg" height="800" width="500" alt="StudentAnswer" className="col-lg-8" />
                    <form className="form-grades">
                        <div className="row">
                            <div className="col-lg-4">
                                <label htmlFor="grades" style={{ "fontSize": "180%" }}>分数</label>
                                <input className="form-control" onClick={this.handelGrade} type="number" min={this.state.minGrade} max={this.state.maxGrade} id="grades" autoFocus />
                            </div>
                            <div className="col-lg-4">
                                <button className="btn btn-primary col-lg-3" type="submit">上一个</button>
                                <button className="btn btn-primary col-lg-3 col-lg-offset-2" type="submit">下一个</button>
                            </div>
                            <div className="col-lg-4">
                                <a href="./result">
                                    <input type="button" className="btn btn-primary col-lg-3 col-lg-offset-5" value="结束" />
                                </a>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}
