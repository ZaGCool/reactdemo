

import React from 'react'

import SmallText from './SmallText'

export default class Test extends React.Component {
  goHome(){
    console.log(this.props);
    this.props.history.push('/home');
  }
  render(){

    return (
      <>

        <div>
        测试页面
        <button onClick = {e=>this.goHome()}>单击跳转到首页</button>

        <div>
          <SmallText />
        </div>
      </div>
      </>
    )
  }
}