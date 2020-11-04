import React from 'react'
import Button from '../../UI/Button/Button'
import style from './OrderSummary.css'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(ingKey => {
    return (
    <li key ={ingKey}>
    <span style ={{textTransform:'capitalize'}}>{ingKey}</span>:{props.ingredients[ingKey]}
    </li>)
  } )

  return (
   <React.Fragment>
   <div className={style.OrderSummary}>
     <h3>Your Order</h3>
     <p> A delicious burger with the following ingredients:</p>
     <ul>
       {ingredientSummary}
     </ul>
     <p><strong>Total Price: $ {props.price.toFixed(2)}</strong></p>
     <Button btnType={'Success'} clicked={props.purchaseContinuedHandler} text={'Continue'}></Button>
     <Button btnType={'Danger'}  clicked={props.purchaseCanceledHandler} text={'CANCEL'}></Button>
     </div>
  </React.Fragment>
 )
}

export default orderSummary
