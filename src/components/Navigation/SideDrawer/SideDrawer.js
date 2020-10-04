import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import style from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
  let attachedClasses = [style.SideDrawer, style.Close]
  if (props.open) {
    attachedClasses = [style.SideDrawer, style.Open]
  }


  return (
    <div>
    <Backdrop show={props.open} clicked={props.closed}/>


    <div className={attachedClasses.join(' ')}>
    <Logo height='10%' margin-bottom="30px"/>
    <nav>
    <NavigationItems />
    </nav>
    </div>

    </div>
  )
}

export default sideDrawer
