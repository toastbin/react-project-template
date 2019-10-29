import React from 'react'
import styles from './style.less'

export default () => {
  return (
    <div className={styles.main}>
      <div className={styles.loading}>
        <div className={styles.double_bounce1}></div>
        <div className={styles.double_bounce2}></div>
      </div>
    </div>
  )
}
