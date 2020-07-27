import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './Burgeringredient/Burgeringredient.js'

const burger = (props) => {
  const transformedIngredients = Object.key(props.ingredients)
      .map(igKey => {
        return [...Array(props.ingredients[igKey])].map(_,i) =>
        {
          <BurgerIngredient key= { igKey i} type={igKey} />
        }
      })

  return (
    <div className={classes.Burger}>

         <BurgerIngredient type="cheese" />
         <BurgerIngredient type="meat" />
         <BurgerIngredient type="bread-bottom" />

    </div>
  )
}
export default burger
