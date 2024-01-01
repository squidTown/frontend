import React, { useRef, useState } from "react";
import container from "../styles/pages/Container.module.css";
import styles from "../styles/components/AddContainer.module.css";
import Button from "./Button";
import PriceItem from "./PriceItem";

const AddContainer = () => {
  const purposeRef: any = useRef();
  const subjectRef: any = useRef();
  const priceRef1: any = useRef();
  const priceRef2: any = useRef();
  const priceRef3: any = useRef();
  const [purposeList, setPurposeList] = useState<string[]>([]);
  const [subjectList, setSubjectList] = useState<string[]>([]);
  const [priceList, setPriceList] = useState<{}[]>([]);

  return (
    <div className={container.container}>
      <div className={container.inner}>
        <div className={styles.container}>
          <div className={`${styles.academyName} ${styles.inputContainer}`}>
            <h3>학원 이름</h3>
            <input type="text" id={styles.academyName} />
          </div>
          <div className={`${styles.academyAddress} ${styles.inputContainer}`}>
            <h3>학원 상세 주소</h3>
            <input type="text" id={styles.academyAddress} />
          </div>
          <div className={`${styles.academyInfo} ${styles.inputContainer}`}>
            <h3>학원 소개</h3>
            <input type="text" id={styles.academyInfo} />
          </div>
          <div className={`${styles.academyTel} ${styles.inputContainer}`}>
            <h3>학원 연락처</h3>
            <input type="text" id={styles.academyTel} placeholder="전화번호" />
            <input type="text" id={styles.academyTel} placeholder="메일 주소" />
            <input
              type="text"
              id={styles.academyTel}
              placeholder="기타 연락처"
            />
          </div>
          <div className={`${styles.academyPeople} ${styles.inputContainer}`}>
            <h3>수용인원</h3>
            <div className={styles.peopleInput}>
              <input type="number" placeholder="최소인원" />
              <span>~</span>
              <input type="number" placeholder="최대인원" />
            </div>
          </div>
          <div className={`${styles.purpose} ${styles.inputContainer}`}>
            <h3>교육 목적</h3>
            <div className={styles.purposeInput}>
              <input type="text" placeholder="ex) 성적 향상" ref={purposeRef} />
              <Button
                clickEvent={() => {
                  setPurposeList([...purposeList, purposeRef.current.value]);
                  purposeRef.current.value = "";
                }}
                size="middle"
                txt="추가"
                type="full"
              />
            </div>
          </div>
          <div className={styles.purposeList}>
            {purposeList.map((value, idx) => (
              <Button
                clickEvent={() => {
                  let arr = purposeList.filter((_, index) => {
                    return index !== idx;
                  });
                  setPurposeList(arr);
                }}
                size="item"
                txt={`${value}`}
                type="empty"
                key={`purpose-item${idx}`}
              />
            ))}
          </div>
          <div className={`${styles.purpose} ${styles.inputContainer}`}>
            <h3>교육 분야</h3>
            <div className={styles.purposeInput}>
              <input type="text" placeholder="ex) 수학" ref={subjectRef} />
              <Button
                clickEvent={() => {
                  setSubjectList([...subjectList, subjectRef.current.value]);
                  subjectRef.current.value = "";
                }}
                size="middle"
                txt="추가"
                type="full"
              />
            </div>
          </div>
          <div className={styles.purposeList}>
            {subjectList.map((value, idx) => (
              <Button
                clickEvent={() => {
                  let arr = subjectList.filter((_, index) => {
                    return index !== idx;
                  });
                  setSubjectList(arr);
                }}
                size="item"
                txt={`${value}`}
                type="empty"
                key={`subject-item${idx}`}
              />
            ))}
          </div>
          <h3>가격</h3>
          <div className={`${styles.price} ${styles.inputContainer}`}>
            <div className={styles.signInput}>
              <input
                type="text"
                placeholder="수강 과목 ex) 수학"
                ref={priceRef1}
              />
              <input
                type="text"
                placeholder="수강 가격 ex) 200,000"
                ref={priceRef2}
              />
              <input
                type="text"
                placeholder="수강 시간 ex) 1,440분"
                ref={priceRef3}
              />
              <Button
                clickEvent={() => {
                  setPriceList([
                    ...priceList,
                    {
                      name: priceRef1.current.value,
                      price: priceRef2.current.value,
                      date: priceRef3.current.value,
                    },
                  ]);
                  priceRef1.current.value = "";
                  priceRef2.current.value = "";
                  priceRef3.current.value = "";
                }}
                size="middle"
                txt="추가"
                type="full"
              />
            </div>
          </div>
          <div className={styles.priceList}>
            {priceList.map((item, idx) => (
              <PriceItem
                key={`item-${idx}`}
                data={item}
                click={() => {
                  let arr = priceList.filter((_, index) => {
                    return index !== idx;
                  });
                  setPriceList(arr);
                }}
              />
            ))}
          </div>
          <div className={styles.btn}>
            <Button
              clickEvent={() => {}}
              size="big"
              txt="등록 완료"
              type="full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContainer;
