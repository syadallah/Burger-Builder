import React from 'react'
import Burger from '../../Burger/Burger'
import Button from './UI/Button/Button'

const checkoutSummary = (pros) => {
  return (
<div>
<h1> We hope it tastes good!</h1>
<div style ={{width: '300px', height: '300px', margin: 'auto'}}>
<Burger />
</div>
<Button btnType="Danger">CANCEL</Button>
<Button btnType="Success">CONTINUE</Button>


</div>
)
}

export default checkoutSummary
