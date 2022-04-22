import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

const KakaoMapRoutedPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=d4229cbd5327d5a024d3ab1a7e618796";

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            37.49803863699234,
            127.02763189742201
          ),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        // const markerPosition = new window.kakao.maps.LatLng(
        //   37.4848929702844,
        //   126.89537799629241
        // );
        // const marker = new window.kakao.maps.Marker({
        //   position: markerPosition,
        // });
        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);
  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
};

export default KakaoMapRoutedPage;
