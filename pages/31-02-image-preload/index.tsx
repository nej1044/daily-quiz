import { useEffect, useRef, useState } from "react";

const ImagePreloadPage = () => {
  const [loadedImg, setLoadedImg] = useState<HTMLImageElement>();
  const divRef = useRef(null);

  useEffect(() => {
    const image = new Image();
    image.src =
      "https://pbs.twimg.com/media/EpM5_znUYAM4jfi?format=jpg&name=4096x4096";
    image.onload = () => {
      setLoadedImg(image);
    };
  }, []);

  const onClickButton = () => {
    divRef.current?.appendChild(loadedImg);
  };
  return (
    <>
      <h1>안녕하세요 사이트에 오신 것을 환영합니다</h1>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보여주기</button>
      <img src="https://pbs.twimg.com/media/EpM5_znUYAM4jfi?format=jpg&name=4096x4096" />
    </>
  );
};

export default ImagePreloadPage;
