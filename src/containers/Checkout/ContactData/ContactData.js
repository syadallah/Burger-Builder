import React, {Component} from 'react'
import Button from '../../../UI/Button/Button'

class ContactData extends Component {
  state ={
    name: '',
    email: '',
    address: {
      street: '',
      postalCode:''
    }
  }
  render () {
    return (
      <div>
      <h4> Enter your contact data</h4>
      <form>
      <input type='text' name='name' placeholder='Your Name' />
      <input type='text' name='email' placeholder='Your Mail' />
      <input type='text' name='street' placeholder='Street' />
      <input type='text' name='name' placeholder='Postal Code' />
      <Button btnType='Success'>ORDER</Button>
      </form>
      </div>
    )
  }
}
export default ContactData
