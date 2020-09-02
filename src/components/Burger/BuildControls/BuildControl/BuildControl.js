import React from 'react'
import styles from './BuildControl.css'

const buildControl = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.lable}</div>
    <button className={styles.Less}>Less</button>
    <button className={styles.More}>more</button>

  </div>
)

export default buildControl
