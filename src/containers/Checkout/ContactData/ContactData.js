import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import style from './ContactData.css'

class ContactData extends Component {
  state ={
    name: '',
    email: '',
    address: {
      street: '',
      postalCode:''
    },
    loading: false
  }
  orderHandler = (event) => {
    event.preventDefault()
   this.setstate({ loading: true})
   const order ={
   ingredients: this.props.ingredients,
   price: this.state.totalprice,
   customer: {
     name: 'Salim',
     address: {
       street: 'leavitt',
       zipcode: '01972',
       country: 'usa'

     },
     email: 'salim@salim.com'
   },
   deliverymethod: 'fast'
 }
   axios.post('/orders.json', order)
   .then(response => {
     this.setstate({ loading: false, purchasing: false})
     })
   .catch(error => {
     this.setstate({ loading: false, purchasing: false})
   })

  }
  render () {
    return (
      <div className={style.ContactData}>
      <h4> Enter your contact data</h4>
      <form>
      <input type='text' name='name' placeholder='Your Name' />
      <input type='email' name='email' placeholder='Your Mail' />
      <input type='text' name='street' placeholder='Street' />
      <input type='text' name='name' placeholder='Postal Code' />
      </form>
      <Button btnType='Success' text="ORDER" clicked={this.orderHandler}></Button>

      </div>
    )
  }
}
export default ContactData
