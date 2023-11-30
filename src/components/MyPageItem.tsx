import React from 'react'
import styles from '../styles/components/MyPageItem.module.css'

const MyPageItem = (props: {txt: string}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        
      </div>
      <div className={styles.txt}>{props.txt}</div>
    </div>
  )
}

export default MyPageItem
