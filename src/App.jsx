
import React from 'react'

import { BrowserRouter as Router , Redirect, Route,Switch } from 'react-router-dom'

import Home from './components/Home'
import News from './components/News'
import NotFound from './components/NotFound'
import Tech from './components/Tech'


import Food from './components/childRoutes/Food'
import Sport from './components/childRoutes/Sport'

export default class App extends React.Component {

  render(){
    // documentFragment 文档碎片 容器
    return (
      <React.Fragment>
        <Router>
          <Switch> 
            {/* 重定向 */}
            <Redirect exact from='/' to="/home"></Redirect>
            <Route exact  path='/home' component={Home}></Route>
            <Route exact path='/news' component={News}></Route>
            <Route exact path='/tech' component={Tech}></Route>
            <News>
              {/* 子路由 */}
              <Switch>
                {/* <Redirect exact from='/news' to='/news/food?pid=44&name=橘子'></Redirect> */}
                <Route exact path='/news/food' component={Food}></Route>
                <Route exact path='/news/sport/:id?' component={Sport}></Route>
              </Switch>
            </News>
           
            <Route exact component={NotFound}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}