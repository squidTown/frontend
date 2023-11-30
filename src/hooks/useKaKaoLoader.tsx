import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: "ce943377323e1f8d6874872c1899bc3e",
    libraries: ["clusterer", "drawing", "services"],
  });
}
