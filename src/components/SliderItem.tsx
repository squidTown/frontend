import React from 'react'
import styles from '../styles/components/Main.module.css'

const SliderItem = (props: { data: string }) => {
  return (
    <div className={styles.content}>
      {props.data}
    </div>
  )
}

export default SliderItem
