import React from 'react'
import styles from '../styles/components/MyPageItem.module.css'
import { getIconById } from '../util'

const MyPageItem = (props: {txt: string, idx: number}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {getIconById(props.idx)}
      </div>
      <div className={styles.txt}>{props.txt}</div>
    </div>
  )
}

export default MyPageItem
