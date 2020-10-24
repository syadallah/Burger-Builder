import React, { Component } from 'react'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'

//Global
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.6,
  bacon: 0.75,
  meat:1.25
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false
  }

  updatePurchaseState () {
    const ingredients = {
      ...this.state.ingredients
    }
    const sum = Object.keys(ingredients)
    .map(igkey => {
      return ingredients[igkey]
    })
    .reduce((sum, el) => {
      return sum+ el
    },0)
    this.setState({purchasable: sum > 0})
  }


// This method used arrow function to contain the state
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState()


  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if (oldCount <= 0) {
      return
    }
    const updatedCount = oldCount - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceDeduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState()
    }
    purchaseHandler = () => {
      this.setState({purchasing: true})
    }
    purchaseCancelHandler =() => {
      this.setState({purchasing: false})
    }
    purchaseContinueHandler = () => {
      //alert('You Continue')
     //this.setState({ loading: true})
    //  const order ={
    //  ingredients: this.state.ingredients,
    //  price: this.state.totalPrice,
    //  customer: {
    //    name: 'Salim',
    //    address: {
    //      street: 'Leavitt',
    //      zipCode: '01972',
    //      country: 'USA'

    //    },
    //    email: 'Salim@salim.com'
    //  },
    //  deliveryMethod: 'Fast'
  //  }
  //    axios.post('/orders.json', order)
  //    .then(response => {
  //      this.setState({ loading: false, purchasing: false})
//      })
  //    .catch(error => {
  //      this.setState({ loading: false, purchasing: false})
  //    })
// BurgerBuldier is loaded through route object, thus we will have access t, match, and locationo history
const queryParams =[]
for (let i in this.state.ingredients) {
  queryParams.push(encodeURIComponent(i) + "="+ encodeURIComponent(this.state.ingredients[i]))

}
const queryString = queryParams.join('&')
this.props.history.push({
  pathname: '/checkout',
  search: '?' + queryString
})
    }
  render () {
    //doesnot update the state, but make a copy
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] =disabledInfo <=0
    }
    let orderSummary = <OrderSummary

    price={this.state.totalPrice}
    ingredients ={this.state.ingredients}
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
         <Burger ingredients= {this.state.ingredients}/>
         <BuildControls
         ingredientAdded={this.addIngredientHandler}
         ingredientRemoved={this.removeIngredientHandler}
         disabled ={disabledInfo}
         price={this.state.totalPrice}
         purchasable ={this.state.purchasable}
         orderd={this.purchaseHandler}
         />
      </React.Fragment>
    )
  }
}

export default BurgerBuilder
