import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import style from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
const sideDrawer = (props) => {
  //..

  return (
    <div>
    <Backdrop />

    <div className={style.SideDrawer}>
    <Logo height='11%'/>
    <nav>
    <NavigationItems />
    </nav>
    </div>

    </div>
  )
}

export default sideDrawer
