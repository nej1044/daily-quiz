import { StarFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useState } from "react";

const startArr = [1, 2, 3, 4, 5];

interface IPropsMyStar {
  isYellow: boolean;
}

const MyStar = styled(StarFilled)`
  color: ${(props: IPropsMyStar) => (props.isYellow ? "#eeee33" : "#9f9f9f")};
`;

const StarLibrary = () => {
  const [value, setValue] = useState(0);
  const onClickStar = (value) => {
    setValue(value);
  };

  return (
    <>
      {startArr.map((el, idx) => (
        <MyStar
          color="gray"
          key={idx}
          onClick={() => onClickStar(el)}
          isYellow={el <= value}
        />
      ))}
      <div>{value}점</div>
    </>
  );
};

export default StarLibrary;
