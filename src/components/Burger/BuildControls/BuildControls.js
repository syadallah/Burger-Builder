import React from 'react'

import style from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
]
const buildControls = (props) => (
  <div className={style.buildControls}>
  <p>Current Price: <strong>{props.price.toFixed(2)}</strong>$</p>
  {controls.map(ctrl => (
    <BuildControl
    key={ctrl.label}
    label={ctrl.label}
    added={() => props.ingredientAdded(ctrl.type)}
    removed={() => props.ingredientRemoved(ctrl.type)}
    disabled={props.disabled[ctrl.type]}

     />
  ))}
  <button
  className={style.OrderButton}
  disabled={!props.purchasable}
  onClick={props.orderd}

  > ORDER NOW</button>

  </div>
)

export default buildControls
