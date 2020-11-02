import React from 'react'
import styles from './Burger.css'
import BurgerIngredient from './Burgeringredient/Burgeringredient.js'
import { withRouter} from 'react-router-dom'

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => (
      // eslint-disable-next-line max-len,react/no-array-index-key
      [...Array(props.ingredients[igKey])].map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />)
    ))
.reduce((arr, el) => {
  return arr.concat(el)
}, [])
if (transformedIngredients.length === 0) {
  transformedIngredients = <p style={{color: "Black"}}> Please start adding ingredients</p>

}
console.log(transformedIngredients)
  return (
    <div className={styles.Burger}>

         <BurgerIngredient type="bread-top" />
         {transformedIngredients}
         <BurgerIngredient type="bread-bottom" />

    </div>
  )
}
export default withRouter(burger)
