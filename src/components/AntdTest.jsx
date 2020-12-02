import React from 'react'

// 引入antd
import {Button, Breadcrumb}  from 'antd';

export default class AntdTest extends React.Component {


  render(){
    return (
      <div>
        antd 测试
      <Button type="primary">Primary Button</Button>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
      </div>
    )
  }
}