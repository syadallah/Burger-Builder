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

// This Handeled using REDUX gloable state
// This method used arrow function to contain the state
  // addIngredientHandler = (type) => {
  //   const oldCount = this.props.ings[type]
  //   const updatedCount = oldCount + 1
  //   const updatedIngredients = {
  //     ...this.props.ings
  //   }
  //   updatedIngredients[type] = updatedCount
  //   const priceAddition = INGREDIENT_PRICES[type]
  //   const oldPrice = this.state.totalPrice
  //   const newPrice = oldPrice + priceAddition
  //   this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  //   this.updatePurchaseState()
  //
  //
  // }
  //
  // removeIngredientHandler = (type) => {
  //   const oldCount = this.props.ings[type]
  //   if (oldCount <= 0) {
  //     return
  //   }
  //   const updatedCount = oldCount - 1
  //   const updatedIngredients = {
  //     ...this.props.ings
  //   }
  //   updatedIngredients[type] = updatedCount
  //   const priceDeduction = INGREDIENT_PRICES[type]
  //   const oldPrice = this.state.totalPrice
  //   const newPrice = oldPrice - priceDeduction
  //   this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  //   this.updatePurchaseState()
  //   }
    purchaseHandler = () => {
      this.setState({purchasing: true})
    }
    purchaseCancelHandler =() => {
      this.setState({purchasing: false})
    }
    purchaseContinueHandler = () => {

// BurgerBuldier is loaded through route object, thus we will have access t, match, and locationo history
const queryParams =[]

for (let i in this.props.ings) {
  queryParams.push(encodeURIComponent(i) + "="+ encodeURIComponent(this.props.ings[i]))

}
queryParams.push('price=' + this.state.totalPrice.toFixed(2))
const queryString = queryParams.join('&')
this.props.history.push({
  pathname: '/checkout',
  search: '?' + queryString
})
    }
  render () {
    //doesnot update the state, but make a copy
    const disabledInfo = {
      ...this.props.ings
    }
    for (let key in disabledInfo) {
      disabledInfo[key] =disabledInfo <=0
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
         disabled ={disabledInfo}
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
