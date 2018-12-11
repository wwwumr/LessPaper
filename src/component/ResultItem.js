import React, { Component } from 'react';

export default class ResultItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.number,
            id: this.props.id,
            level: this.props.level,
            grade: this.props.grade,
            error: this.props.error,
            key: this.props.key
        }
    }

    render() {
        return (
            <tr key={this.props.key}>
                <td>{this.state.number}</td>
                <td>{this.state.id}</td>
                <td>{this.state.level}</td>
                <td>{this.state.grade}</td>
                <td>{this.state.error}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        查看原图
                            </button>
                    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                        aria-hidden="true">&times;</span></button>
                                    <h4 className="modal-title" id="myModalLabel">原答案</h4>
                                </div>
                                <div className="modal-body">
                                    <img src="img/img1.jpg" height="800" width="500" alt="StudentAnswer" />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }
}
