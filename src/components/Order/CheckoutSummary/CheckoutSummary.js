import React from 'react'
import Button from '../../UI/Button/Button'
import style from './CheckoutSummary.css'

const checkoutSummary = (props) =>
<div className={style.CheckoutSummary}>
<h1> We hope it tastes good!</h1>
<div style ={{width: '100%', margin: 'auto'}}>
</div>

<Button
btnType="Danger"
clicked={props.checkoutCancelled} text={'CANCEL'}></Button>
<Button
btnType="Success"
clicked={props.checkoutContinued} text={'Checkout'}></Button>


</div>


export default checkoutSummary
