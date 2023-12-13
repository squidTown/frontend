import React from 'react'
import classNames from "classnames/bind";
import styles from '../styles/components/Main.module.css'

const cx = classNames.bind(styles);

const SliderItem = (props: { color: string; }) => {
  return (
    <div className={cx([`${props.color}`].join(" "),  [`content`].join(" "))}>
    </div>
  )
}

export default SliderItem
