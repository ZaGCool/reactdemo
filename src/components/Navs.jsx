
import React from 'react'

import { NavLink } from 'react-router-dom'

import '../css/nav.css'

export default class Navs extends React.Component {

  render(){

    return (
      <nav id="header">
        <NavLink activeClassName='active'  to="/home">首页</NavLink>
        <NavLink  activeClassName='active'  to="/news">新闻</NavLink>
        {/* <NavLink  activeClassName='active'  to="/tech">科技</NavLink> */}
        <NavLink  activeClassName='active'  to={ {
          pathname: "/tech",
          search: "?name=lisi&age=25",
          hash: "#abc",
          state: {
            msg: "呵呵"
          }
        }  }>科技</NavLink>
       
      </nav>
    )
  }
}