
import React from 'react'

import { withRouter } from 'react-router-dom'

class SmallText extends React.Component {
  goHome(){
    console.log(this.props);
    this.props.history.push('/home');
  }
  render(){

    return (
      <>

        <div>
        smallText页面
        <button onClick = {e=>this.goHome()}>单击跳转到首页</button>
      </div>
      </>
    )
  }
}

export default  withRouter(SmallText);


/* 
withRouter 高阶组件： 把一个组件传入到另一个组件中 做处理 

withRouter = (SmallText)=>{
  return ()=>{
    return <Route component={SmallText}></Route>
  }
}
*/