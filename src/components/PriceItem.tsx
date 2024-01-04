import React from 'react'
import styles from '../styles/components/PriceItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const PriceItem = (props: { data: any, click: any }) => {
  console.log(props.data)
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.name}>
          {props.data.academySubject}
          <FontAwesomeIcon icon={faXmark} onClick={props.click} />
        </div>
        <div className={styles.etc}>가격</div>
        <div className={styles.price}>{props.data.academyPrice.toLocaleString()}</div>
        <div className={styles.etc}>수강 시간(분)</div>
        <div className={styles.date}>{props.data.academyData.toLocaleString()}</div>
      </div>
    </div>
  )
}

export default PriceItem
