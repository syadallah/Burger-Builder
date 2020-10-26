import React, { Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary'
import { Route } from 'react-router-dom'

class Checkout extends Component {
  state = {
    ingredients: {
      salad:1,
      meat:1,
      cheese:1,
      bacon:1
    }
  }
  checkoutCancelledHandler = () => {
    this.props.history.goBack()

  }
  checkoutContinuedHandler = () => {
    this.props.history.replace('checkout/contact-data')

  }
render () {
  return (
    <div>
    <CheckoutSummary ingredients={this.state.ingredients}
    checkoutCancelled={this.checkoutCancelledHandler}
    checkoutContinued={this.checkoutContinuedHandler}/>
    < Route path={this.props.match.url + '/contact-data'} />
    </div>
  )
}
}

export default  Checkout
