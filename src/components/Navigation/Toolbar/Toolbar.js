import React from 'react'
import style from './Toolbar.css'
import burgerLogo from '../../../Logo/Logo'
const toolbar = (props) => (
  <header className={style.Toolbar}>
  <div>MENU</div>
  <div>{burgerLogo}</div>
  <nav>
  ...
  </nav>
  </header>

)

export default toolbar;
