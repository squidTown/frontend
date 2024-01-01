import React, { useState } from 'react'
import styles from '../styles/components/Main.module.css';
import containers from '../styles/pages/Container.module.css';
import Banner from './Banner';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderItem from './SliderItem';

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const dotsFloat = {
    bottom: '10px',
  }

  const activeDotStyle = {
    backgroundColor: '#5467f5',
    width: '10px',
    height: '10px',
    margin: '0 4px',
    borderRadius: '50%',
    cursor: 'pointer',
  };

  const inactiveDotStyle = {
    backgroundColor: 'gray',
    width: '10px',
    height: '10px',
    margin: '0 4px',
    borderRadius: '50%',
    cursor: 'pointer',
    opacity: '0.4',    
  };

  const settings = {
    arrows: false, // 좌, 우 버튼
    dots: true, // 개수 표시 점
    infinite: true, // 무한 캐러셀
    speed: 400, // 다음 컨텐츠 까지의 속도
    slidesToShow: 1, // 화면에 보이는 컨텐츠 수
    slidesToScroll: 1, // 스크롤 시 넘어가는 컨텐츠 수
    centerMode: true, // 현재 컨텐츠 가운데 정렬
    centerPadding: '0', // 중앙 컨텐츠 padding 값
    autoplay: true, // 자동 캐러셀
    autoplaySpeed: 3500, // 자동 캐러셀 속도
    initialSlide: 0, // 첫 컨텐츠 번호
    pauseOnFocus: true, // focus시 정지
    pauseOnHover: true, // hover시 정지
    appendDots: (dots: any) => (
      <div style={dotsFloat}>
        <ul>{dots}</ul>
      </div>
    ),
    beforeChange: (current: any, next: any) => setCurrentSlide(next),
    customPaging: (i: any) => {
      return (
        <div style={i === currentSlide ? activeDotStyle : inactiveDotStyle}></div>
      );
    },
  };

  return (
    <div className={containers.container}>
      <div className={containers.inner}>
        <div className={styles.inner}>
          <div className={styles.sliderContainer}>
            <Slider {...settings}>
              <SliderItem id={"1"} path={""} />
              <SliderItem id={"2"} path={"academy"} />
              <SliderItem id={"3"} path={"teacher"} />
              <SliderItem id={"4"} path={""} />
              <SliderItem id={"5"} path={"academy"} />
              <SliderItem id={"6"} path={"teacher"} />
            </Slider>
          </div>
          <div className={styles.bannerInner}>
            <div className={styles.alignRow}>
              <Banner
                bannerSize={"lg"}
                bannerTitle={"지도에서 찾기"}
                bannerColor={"1"}
                path={"map"}
              />
              <div className={styles.alignCol}>
                <Banner
                  bannerSize={"sm"}
                  bannerTitle={"내 주변 과외선생님"}
                  bannerColor={"2"}
                  path={"teacher"}
                />
                <Banner
                  bannerSize={"sm"}
                  bannerTitle={"내 주변 학원"}
                  bannerColor={"3"}
                  path={"academy"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;