import React from 'react'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey => {
    return (
    <li key ={igKey}>
    <span style ={{textTransform:'capitalize'}}> </span>{igKey}:{props.ingredients[igKey]}
    </li>)
  } )

  return (
   <React.Fragment>
     <h3>Your Order</h3>
     <p> A delicious burger with the following ingredients:</p>
     <ul>
       {ingredientSummary}
     </ul>
     <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
     <Button btnType={'Success'} clicked={props.purchaseContinuedHandler}> Continue</Button>
     <Button btnType={'Danger'}  clicked={props.purchaseCanceledHandler}>CANCEL</Button>
  </React.Fragment>
 )
}

export default orderSummary
