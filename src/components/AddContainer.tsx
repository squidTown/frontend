import React from 'react'
import container from '../styles/pages/Container.module.css'
import styles from '../styles/components/AddContainer.module.css'

const AddContainer = () => {
  return (
    <div className={container.container}>
      <div className={container.inner}>
        <div className={styles.container}>
          <h3>학원 등록하기</h3>
          <div className={styles.inner}>
            <span className={styles.title}>학원 지역</span>
            <span className={styles.subtitle}>학원의 주소와 이름을 꼭 입력해주세요</span>
            <div className={styles.country}>
              <span>학원 주소 입력</span>
              <input type='text' placeholder='ex) 경북 의성군 의성읍 후죽4길 3' />
            </div>
            <div className={styles.academy}>
              <span>학원명 입력</span>
              <input type='text' placeholder='ex) 종로아인스학원' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddContainer
