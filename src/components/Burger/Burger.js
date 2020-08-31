import React from 'react'
import styles from './Burger.css'
import BurgerIngredient from './Burgeringredient/Burgeringredient.js'

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
          return <BurgerIngredient key= {igKey + i} type={igKey} />
      })
})
console.log(transformedIngredients)
  return (
    <div className={styles.Burger}>

         <BurgerIngredient type="bread-top" />
         <BurgerIngredient type="cheese" />
         <BurgerIngredient type="meat" />
         {transformedIngredients}
         <BurgerIngredient type="bread-bottom" />

    </div>
  )
}
export default burger
