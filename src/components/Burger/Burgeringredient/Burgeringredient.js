import React, { Component} from 'react'
import PropTypes from 'prop-types'
import stylesheet from './Burgeringredient.css'


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
        ingredient = <div className={classes.BreadBottom}></div>
         break
     case('bread-top'):
        ingredient = (
               <div className={classes.BreadTop}>
                           <div className={classes.seeds1}></div>
                           <div className={classes.seeds2}></div>
               </div>
            )
          break
     case('meat'):
          ingredient = <div className="Meat"></div>
          break
     case('cheese'):
          ingredient = <div className="Cheese"></div>
          break
     case('bacon'):
          ingredient = <div className="Bacon"></div>
          break
      case('salad'):
          ingredient = <div className="Salad"></div>
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
