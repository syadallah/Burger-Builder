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
     <Button clicked={props.purchaseContinuedHandler}> Continue</Button>
     <Button clicked={props.purchaseCanceledHandler}>CANCEL</Button>
  </React.Fragment>
 )
}

export default orderSummary
