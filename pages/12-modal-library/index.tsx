import { useState } from "react";
import styled from "@emotion/styled";

interface IModalBackground {
  isOpen: boolean;
}

const ModalBackground = styled.div`
  display: ${(props: IModalBackground) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 20px;
`;

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <ModalBackground isOpen={isOpen}>
        <ModalWrapper>
          <span>모달입니다</span>
          <span onClick={toggleModal}>close</span>
        </ModalWrapper>
      </ModalBackground>
      <button onClick={toggleModal}>모달 토글</button>
    </>
  );
};

export default Modal;
