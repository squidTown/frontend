import React, { useRef, useState } from "react";
import container from "../styles/pages/Container.module.css";
import styles from "../styles/components/AddContainer.module.css";
import Button from "./Button";
import PriceItem from "./PriceItem";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { postAcademy } from "../api/academyAPI";
import { useNavigate } from "react-router";

interface AcademyPrice {
  academySubject: string;
  academyPrice: number;
  academyData: string;
}

const AddContainer = () => {
  const navigate = useNavigate();
  const acaNameRef: any = useRef();
  const acaPersonRef: any = useRef();
  const acaAdrRef: any = useRef();
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  const acaInfoRef: any = useRef();
  const acaTelRef: any = useRef();
  const acaMailRef: any = useRef();
  const acaEtc: any = useRef();

  const purposeRef: any = useRef();
  const subjectRef: any = useRef();
  const priceRef1: any = useRef();
  const priceRef2: any = useRef();
  const priceRef3: any = useRef();
  const [purposeList, setPurposeList] = useState<string[]>([]);
  const [subjectList, setSubjectList] = useState<string[]>([]);
  const [priceList, setPriceList] = useState<AcademyPrice[]>([]);

  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data: any) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(data.address, (result: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const currentPos = new window.kakao.maps.LatLng(
          result[0].y,
          result[0].x
        );
        acaAdrRef.current.value = data.address;
        setLat(currentPos.getLat());
        setLng(currentPos.getLng());
      }
    });
  };

  const clickInput = () => {
    open({ onComplete: handleComplete });
  };

  const createAcademy = () => {
    postAcademy({
      academyName: acaNameRef.current.value,
      Personnel: acaPersonRef.current.value,
      subject: subjectList,
      purpose: "교육",
      ArrayacademyPrice: priceList,
      address: acaAdrRef.current.value,
      Latitude: lat,
      longitude: lng,
      academyInfo: acaInfoRef.current.value,
      sns: [
        acaTelRef.current.value,
        acaMailRef.current.value,
        acaEtc.current.value,
      ],
    })
      .then((res) => {
        alert("학원을 게시하였습니다 !");
        navigate('/');
      })
      .catch((res) => alert("학원 게시에 실패하였습니다!"));
  };

  const [imgFile, setImgFile] = useState<any>("");
  const imgRef: any = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <div>
      <div className={container.container}>
        <div className={container.inner}>
          <div className={styles.container}>
            <span
              style={{
                fontSize: "19px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              학원 대표 사진
            </span>
                <div className={styles.imgCon} style={{
                  backgroundImage: `url(${imgFile ? imgFile : '/defaultBack.png'})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                
                </div>
            <div className={styles.imgBox}>
              <input
                type="file"
                onChange={saveImgFile}
                accept="image/*"
                ref={imgRef}
              />
            </div>
            <div className={`${styles.academyName} ${styles.inputContainer}`}>
              <span>학원 이름</span>
              <input type="text" id={styles.academyName} ref={acaNameRef} />
            </div>
            <div
              className={`${styles.academyAddress} ${styles.inputContainer}`}
            >
              <span>학원 상세 주소</span>
              <input
                type="text"
                placeholder="클릭하여 주소 검색"
                id={styles.academyAddress}
                readOnly={true}
                onClick={clickInput}
                ref={acaAdrRef}
              />
            </div>
            <div className={`${styles.academyInfo} ${styles.inputContainer}`}>
              <span>학원 소개</span>
              <input type="text" id={styles.academyInfo} ref={acaInfoRef} />
            </div>
            <div className={`${styles.academyTel} ${styles.inputContainer}`}>
              <span>학원 연락처</span>
              <input
                type="text"
                id={styles.academyTel}
                placeholder="전화번호"
                ref={acaTelRef}
              />
              <input
                type="text"
                id={styles.academyTel}
                placeholder="메일 주소"
                ref={acaMailRef}
              />
              <input
                type="text"
                id={styles.academyTel}
                placeholder="기타 연락처"
                ref={acaEtc}
              />
            </div>
            <div className={`${styles.academyPeople} ${styles.inputContainer}`}>
              <span>수업 인원</span>
              <input
                type="number"
                placeholder="ex) 5"
                min={1}
                ref={acaPersonRef}
              />
            </div>
            <div className={`${styles.purpose} ${styles.inputContainer}`}>
              <span>교육 목적</span>
              <div className={styles.purposeInput}>
                <input
                  type="text"
                  placeholder="ex) 성적 향상"
                  ref={purposeRef}
                />
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
              <span>교육 분야</span>
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
            <div className={`${styles.price} ${styles.inputContainer}`}>
              <div className={styles.signInput}>
                <span>가격</span>
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
                        academySubject: priceRef1.current.value,
                        academyPrice: parseInt(priceRef2.current.value),
                        academyData: priceRef3.current.value,
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
                clickEvent={createAcademy}
                size="big"
                txt="등록 완료"
                type="full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContainer;
