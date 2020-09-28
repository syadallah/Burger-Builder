import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import style from './Logo.css'
const logo = (props) => (
  <div className={style.Logo}>
  <img src={burgerLogo} alt="My logo" />
  </div>

)

export default logo
