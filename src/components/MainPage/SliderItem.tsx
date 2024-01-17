import React from 'react'
import classNames from "classnames/bind";
import styles from '../../styles/components/MainPage/Main.module.css'
import { getBannerImgById } from '../../util';
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const SliderItem = (props: { id: string; path?: string; }) => {
  const navigate = useNavigate();
  
  const clickBanner = () => {
    navigate(`/${props.path}`);
  };

  return (
    <div 
      className={cx([`content`].join(" "))} 
      style={{backgroundImage: `url(${getBannerImgById(props.id)})` }} 
      onClick={clickBanner}
    />
  )
}

export default SliderItem
