


import React from 'react'

import Navs from './Navs'

import Test from './Test'

export default class Tech extends React.Component {
  goHome(){
    // 跳转到首页
    this.props.history.push('/home');
  }
  render(){
    console.log(this.props);
    let { pathname,hash,search,state } = this.props.location
    return (
      <>
        <Navs/>
        <div>
        科技页面 --{state.msg}---{ pathname }
        <button onClick={ e=>this.goHome(e)}>点击跳转到首页</button>

        <hr/>
        <Test history={this.props.history} />
      </div>
      </>
    )
  }
}