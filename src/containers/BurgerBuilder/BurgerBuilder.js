import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  render () {
    return (
      <React.Fragment>
         <Burger ingredients= {this.state.ingredients}/>
         <div>Build Control</div>
      </React.Fragment>
    )
  }
}

export default BurgerBuilder
