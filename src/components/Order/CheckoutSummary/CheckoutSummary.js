import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import style from './CheckoutSummary.css'

const checkoutSummary = (props) => {
  return (
<div className={style.CheckoutSummary}>
<h1> We hope it tastes good!</h1>
<div style ={{width: '100%', margin: 'auto'}}>
<Burger ingredients={props.ingredients}/>
</div>
<Button btnType="Danger"
clicked={props.checkoutCancelled} text={'CANCEL'}></Button>
<Button btnType="Success"
clicked={props.checkoutContinued} text={'Checkout'}></Button>


</div>
)
}

export default checkoutSummary
