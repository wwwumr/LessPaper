import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { List, Tabs, Button } from 'antd';

function callback(key) {
    console.log(key);
}

const data = [
    {
        title: "Qusetion 1",
    },
    {
        title: "Question 2",
    },
    {
        title: "Question 3"
    }
]

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Tabs onChange={callback}>
                    <Tabs.TabPane tab="最近" key="1">
                        <List
                            bordered="true"
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        
                                        title={<a href="/result">{item.title}</a>}
                                        description="Question Decription"
                                    />
                                    <Link to="/result">
                                    <Button type="primary">查看结果</Button>
                                    </Link>
                                </List.Item>
                            )}
                        />

                    </Tabs.TabPane>
                    <Tabs.TabPane tab="已完成" key="2">
                        <List
                            bordered="true"
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        
                                        title={<a href="/result">{item.title}</a>}
                                        description="Question Decription"
                                    />
                                    <Link to="/result">
                                    <Button type="primary">查看结果</Button>
                                    </Link>
                                </List.Item>
                            )}
                        />
                    </Tabs.TabPane>

                </Tabs>

            </div>
        )
    }
}

