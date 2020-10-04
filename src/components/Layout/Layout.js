import React, {Component} from 'react'
import styles from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: true
  }
  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false})

  }
  render () {
    return (
      <React.Fragment>
      <Toolbar />
      <SideDrawer

      closed={this.sideDrawerCloseHandler}
      open={this.state.showSideDrawer}/>
      <main className={styles.Content}>
      {this.props.children}
      </main>
      </React.Fragment>

    )
  }
}
export default Layout
