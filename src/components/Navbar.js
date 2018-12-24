import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Layout, Icon } from 'antd';

const {
    Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: this.props.login,
            collapsed: false
        }
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <div className="logo" />
                {
                this.props.login ?
                (
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Link to="/home">
                                <Icon type="file" />
                                <span>LessPaper</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                        <Link to="/home">
                            <Icon type="home" />
                            <span>主页</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                        <Link to="/newquestion">
                            <Icon type="plus-square" />
                            <span>新建问题</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                        <Link to="/history">
                            <Icon type="bars" />
                            <span>历史记录</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>用户</span></span>}
                        >
                            <Menu.Item key="5"><Link to="/settings"><span><Icon type="setting" /></span>设置</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/help"><span><Icon type="question-circle" /></span>帮助</Link></Menu.Item>
                            <Menu.Item key="7" onClick={this.props.signOut} ><span><Icon type="logout" /></span>注销</Menu.Item>
                        </SubMenu>
                    </Menu>
                ) :
                (
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                        <Link to="/">
                            <Icon type="file" />
                            <span>LessPaper</span>
                        </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>您好，请登录！</span></span>}
                        >
                            <Menu.Item key="2"><Link to="/"><span><Icon type="login" /></span>登录</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/help"><span><Icon type="question-circle" /></span>帮助</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                )
                }
            </Sider>
        )
    }
}
