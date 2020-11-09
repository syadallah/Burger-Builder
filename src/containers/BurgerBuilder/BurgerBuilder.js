import React, { Component } from 'react'
import { connect } from 'react-redux'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-orders'
import * as actionTypes from '../../store/action'
//Global

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false
  }

  updatePurchaseState (ingredients) {

    const sum = Object.keys(ingredients)
    .map(igkey => {
      return ingredients[igkey]
    })
    .reduce((sum, el) => {
      return sum+ el
    },0)
return sum > 0
  }

    purchaseHandler = () => {
      this.setState({purchasing: true})
    }
    purchaseCancelHandler =() => {
      this.setState({purchasing: false})
    }
    // Instead of using queryParams to pass state now we use redux
purchaseContinueHandler = () => {

this.props.history.push('/checkout')
}

  render () {
    //doesnot update the state, but make a copy
    const disabledInfo = { ...this.props.ings }
      for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
      }
    let orderSummary = <OrderSummary

    price={this.props.price}
    ingredients ={this.props.ings}
    purchaseCanceledHandler={this.purchaseCancelHandler}
    purchaseContinuedHandler={this.purchaseContinueHandler} />

    if (this.state.loading) {
      orderSummary = <Spinner />

    }
    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
        {orderSummary}

        </Modal>
         <Burger ingredients= {this.props.ings}/>
         <BuildControls
         ingredientAdded={this.props.onIngredientAdded}
         ingredientRemoved={this.props.onIngredientRemoved}
         disabledInfo={disabledInfo}
         price={this.props.price}
         purchasable ={this.updatePurchaseState(this.props.ings)}
         orderd={this.purchaseHandler}
         />
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (igName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: igName}),
    onIngredientRemoved: (igName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: igName})

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(
  withErrorHandler(
    BurgerBuilder, axios
  )
)
