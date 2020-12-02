
import React from 'react'

import Navs from './Navs'

import AntdTest from './AntdTest'

export default class Home extends React.Component {

  render(){

    return (
      <>
        <Navs/>
        <div>
        首页页面

        <AntdTest/>
      </div>
      </>
    )
  }
}