import React from 'react'
import style from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = () => (
  <ul className={style.NavigationItems}>
  <NavigationItem link='/' active>Burger Builder</NavigationItem>
  <NavigationItem link='/orders'>Your Orders</NavigationItem>

  </ul>

)

export default navigationItems
