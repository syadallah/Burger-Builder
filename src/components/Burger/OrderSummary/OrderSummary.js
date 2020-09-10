import React from 'react'

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
     <button> Check Out!</button>
     <button>CANCEL</button>
     <button>CONTINUE</button>
  </React.Fragment>
 )
}

export default orderSummary
