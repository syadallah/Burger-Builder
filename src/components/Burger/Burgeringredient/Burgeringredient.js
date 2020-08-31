import React, { Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Burgeringredient.css'


class BurgerIngredient extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }


  render () {
  let ingredient = null

  switch (this.props.type) {
     case('bread-bottom'):
        ingredient = <div className="breadBottom"></div>
         break
     case('bread-top'):
        ingredient = (
               <div className={styles.BreadTop}>
                           <div className="seeds1"></div>
                           <div className="seeds2"></div>
               </div>
            )
          break
     case('meat'):
          ingredient = <div className="meat"></div>
          break
     case('cheese'):
          ingredient = <div className="cheese"></div>
          break
     case('bacon'):
          ingredient = <div className="bacon"></div>
          break
      case('salad'):
          ingredient = <div className="salad"></div>
          break
      default:
          ingredient = null
    }
    return ingredient
  }
}
BurgerIngredient.propTypes = {
  type:PropTypes.string.isRequired
 }
export default BurgerIngredient
