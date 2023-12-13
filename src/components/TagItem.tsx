import React from 'react'
import styles from '../styles/components/TagItem.module.css'

const TagItem = (props: { tag: string }) => {
  return (
    <span className={styles.tag}>{props.tag}</span>
  )
}

export default TagItem
