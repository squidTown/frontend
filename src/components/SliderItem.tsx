import React from 'react'
import classNames from "classnames/bind";
import styles from '../styles/components/Main.module.css'
import { getBannerImgById } from '../util';

const cx = classNames.bind(styles);

const SliderItem = (props: { id: string; }) => {
  return (
    <div className={cx([`content`].join(" "))} style={{
      backgroundImage: `url(${getBannerImgById(props.id)})`,
    }} />
  )
}

export default SliderItem
