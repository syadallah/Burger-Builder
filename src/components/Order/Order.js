import React from 'react'
import style from './Order.css'

// () jus return jsx { return ()} return function
const order = (props) => {
  const ingredients = []
  // in for in loop ingredientName will be bacon, cheese, ect..
  for (let ingredientName in props.ingredients) {
    ingredients.push({name: ingredientName,
      amount:props.ingredients[ingredientName]
    })
  }
  const ingredientOutput = ingredients.map(ig => {
    return <span
    style={{
      display: 'inline-block',
      margin: '0 8px',
      border: '1px solid #ccc',
      padding: '5px',
      textTransform: 'capitalize'
    }}
    key={ig.name}>{ig.name}({ig.amount})</span>
  })
  return (
    <div className={style.Order}>
    <p> Burger Ingredients: {ingredientOutput}</p>
    <p>Price: <strong>USD {props.price}</strong></p>
    </div>
  )
}

  export default order
