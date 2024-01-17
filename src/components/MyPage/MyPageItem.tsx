import React from 'react'
import styles from '../../styles/components/MyPage/MyPageItem.module.css'
import { getIconById } from '../../util'

const MyPageItem = (props: {txt: string, idx: number, onClick: () => void}) => {
  return (
    <div className={styles.container} onClick={props.onClick}>
      <div className={styles.icon}>
        {getIconById(props.idx)}
      </div>
      <div className={styles.txt}>{props.txt}</div>
    </div>
  )
}

export default MyPageItem
