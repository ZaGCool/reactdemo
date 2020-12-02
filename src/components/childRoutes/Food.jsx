import qs from 'querystring'
import React from 'react'

export default class Food extends React.Component {
  // console.log(props);
  constructor(props){
    super(props)

    this.ret =  qs.parse(this.props.location.search.substring(1)) 
  }
  goHome(){
    this.props.history.push('/home')
  }
  render(){
    return (
      <div>
        食品 {this.ret.pid} ==={this.ret.name}
        <button onClick={e=>this.goHome(e)}>单击回到首页</button>
      </div>
    )
  }
}