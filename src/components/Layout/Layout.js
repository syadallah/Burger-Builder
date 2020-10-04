import React, {component} from 'react'
import styles from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends component {
  render () {
    return (
      <React.Fragment>
      <Toolbar />
      <SideDrawer />
      <main className={styles.Content}>
      {this.props.children}
      </main>
      </React.Fragment>

    )
  }
}
export default Layout
