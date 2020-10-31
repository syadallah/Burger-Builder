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
    }
  }
  orderHandler = () => {
    
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
