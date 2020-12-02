
import React from 'react'

import Navs from './Navs'

import {Link} from 'react-router-dom'

export default class News extends React.Component {

  render(){

    return (
      <>
        <Navs/>
        <div>
        新闻页面  <br/>
        <Link to="/news/sport/15">运动商品15</Link> <br/>
        <Link to="/news/sport/28">运动商品28</Link> <br/>
        <Link to="/news/food?pid=14&name=苹果">食物--苹果</Link> <br/>
        <Link to="/news/food?pid=25&name=香蕉">食物--香蕉</Link> <br/>
        {this.props.children}
      </div>
      </>
    )
  }
}