import React, { Component } from 'react';

import {
  Layout
} from 'antd';

// import NewQuestionPage from './NewQuestionPage';
// import HomePage from './HomePage';
import SigninPage from './SigninPage';
import Navbar from './Navbar';
import '../assets/css/SiderDemo.css';

const {
  Header, Content, Footer
} = Layout;


class SiderDemo extends Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <SigninPage />
            {/* <HomePage/> */}
            {/* <NewQuestionPage /> */}
            
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            LessPaper ©2018 Created by Skr狠人
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
