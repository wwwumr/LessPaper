import React, { Component } from 'react';
import ResultItem from './ResultItem';

export default class ResultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultArray: [
                {
                    "number": "1",
                    "id": "5170309",
                    "level": "A",
                    "grade": "90",
                    "error": "0"
                },
                {
                    "number": "2",
                    "id": "5170309",
                    "level": "A",
                    "grade": "95",
                    "error": "0"
                },
                {
                    "number": "3",
                    "id": "5170309",
                    "level": "A",
                    "grade": "70",
                    "error": "-10%"
                },
                {
                    "number": "4",
                    "id": "5170309",
                    "level": "C",
                    "grade": "90",
                    "error": "+10%"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">结果</div>
                    <div className="panel-body">
                        
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>编号</th>
                                        <th>学号</th>
                                        <th>机器判定结果</th>
                                        <th>得分</th>
                                        <th>误差</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.resultArray.map((value, key) => {
                                        return (
                                            <ResultItem number={value.number} id={value.id} level={value.level} grade={value.grade} error={value.error} key={key} />
                                        )
                                    })}
                                </tbody>
                            </table>
                        
                    </div>
                </div>

            </div>
        )
    }
}
