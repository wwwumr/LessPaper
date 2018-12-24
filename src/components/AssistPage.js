import React, { Component } from 'react';

import { Icon } from 'antd';

export default class AssistPage extends Component {
  render() {
    return (
      <div>
        <h1>LessPaper</h1>
        <p>使用人工智能技术的阅卷辅助系统</p>
        <p>使用说明详见文档</p>
        <h1>联系我们</h1>
        <p><span><Icon type="github" /></span><a href="https://github.com/chuyuxuan123/LessPaper-AntD">GitHub</a></p>
        <p><span><Icon type="qq" />qq群：12345678</span></p>
      </div>
    )
  }
}
