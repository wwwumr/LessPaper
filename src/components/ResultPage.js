import React, { Component } from 'react'

import { Table, Row, Col, Button } from 'antd';

export default class ResultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProblemMsg: '',
            ProblemTime: '',
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
                    "id": "5170308",
                    "level": "A",
                    "grade": "95",
                    "error": "0"
                },
                {
                    "number": "3",
                    "id": "5170406",
                    "level": "A",
                    "grade": "70",
                    "error": "-10%"
                },
                {
                    "number": "4",
                    "id": "5170203",
                    "level": "C",
                    "grade": "90",
                    "error": "+10%"
                }
            ]
        }
    }
    render() {
        const columns=[
            {
                title: "编号",
                dataIndex:"number",
                key:"number",
            },
            {
                title: "学号",
                dataIndex:"id",
                key:"id",
            },
            {
                title: "等级",
                dataIndex:"level",
                key:"level",
            },
            {
                title: "分数",
                dataIndex:"grade",
                key:"grade",
            },
            {
                title: "误差",
                dataIndex:"error",
                key:"error",
            },
            {
                title: "操作",
                key:"action",
                render: () => (
                    <Button type="primary">查看原图</Button>
                )
            },
        ]
        return (
            <div>
                <Row type="flex" justify="space-around" align="middle" >
                    <Col span={20}>
                    <h2>题目信息</h2>
                    <p>啦啦啦，我是题目的信息</p>
                    <h2>结果</h2>
                    <Table columns={columns} dataSource={this.state.resultArray} />
                    </Col>
                </Row>

            </div>
        )
    }
}
