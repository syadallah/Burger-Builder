import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import style from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
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
   this.setState({loading: true})

   const order ={
   ingredients: this.props.ingredients,
   price: this.props.price,
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
     this.setState({ loading: false})
     })
   .catch(error => {
     this.setState({ loading: false})
   })

  }
  render () {
    let form = (
      <form>
      <input type='text' name='name' placeholder='Your Name' />
      <input type='email' name='email' placeholder='Your Mail' />
      <input type='text' name='street' placeholder='Street' />
      <input type='text' name='name' placeholder='Postal Code' />
      <Button btnType='Success' text="ORDER" clicked={this.orderHandler}></Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />

    }
    return (
      <div className={style.ContactData}>
      <h4> Enter your contact data</h4>
       {form}

      </div>
    )
  }
}
export default ContactData
