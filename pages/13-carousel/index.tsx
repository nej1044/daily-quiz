// const Carousel=()=>{

//     return(
//         <>
//             <div>1</div>
//             <div>2</div>
//             <div>3</div>
//             <div>4</div>
//         </>
//     )
// }

// export default Carousel

import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

// 슬라이드에 들어갈 이미지
const Img = styled.img`
  width: 500px;
  height: 500px;
`;
const Wrapper = styled.div`
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 500px;
  height: 1000px;

  overflow: hidden;
`;
const SlideContainer = styled.div`
  display: flex;
`;
const ButtonWrapper = styled.div`
  margin-top: 50px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
const SlideButton = styled.div`
  width: 80px;
  padding: 20px;
  border-radius: 20px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: yellow;
    color: #000;
  }
`;

// 이미지가 들어있는 슬라이드 컴포넌트
const SlideImg = (props) => {
  return <Img src={props.img} />;
};

const MySlider = () => {
  const img01 = "/img/pizza.jpg";
  const img02 = "/img/ProfileImg.png";
  const img03 = "/img/kakao.png";
  // 슬라이드 갯수 (0,1,2)
  const totalSlide = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const onClickNext = () => {
    // 마지막 슬라이드까지 가면
    if (currentSlide >= totalSlide) {
      // 첫번째 슬라이드로 이동
      setCurrentSlide(0);
      // 작동안함
      // return;
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const onClickPrev = () => {
    if (currentSlide === 0) {
      // 마지막 슬라이드로 이동
      setCurrentSlide(totalSlide);
      // 작동안함
      // return
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <Wrapper>
      <Container>
        <SlideContainer ref={slideRef}>
          <SlideImg img={img01} />
          <SlideImg img={img02} />
          <SlideImg img={img03} />
        </SlideContainer>
        <ButtonWrapper>
          <SlideButton onClick={onClickPrev}>Prev</SlideButton>
          <SlideButton onClick={onClickNext}>Next</SlideButton>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};
export default MySlider;
