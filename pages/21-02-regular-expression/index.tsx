import { useState } from "react";

const RegularExpression = () => {
  const [reg, setReg] = useState(false);
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);

  const regex = (event) => {
    setReg(
      /^\d{4}.(0[1-9]|1[012]).(0[1-9]|[12][0-9]|3[01])$/.test(
        event.target.value
      )
    );
  };

  const phoneValid = (event) => {
    setPhone(
      /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(event.target.value)
    );
  };

  const emailValid = (event) => {
    setEmail(
      // eslint-disable-next-line no-useless-escape
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
        event.target.value
      )
    );
  };

  return (
    <>
      <h1>날짜</h1>
      <input type="text" onChange={regex} />
      <div>{String(reg)}</div>
      <h1>휴대폰번호</h1>
      <input type="text" onChange={phoneValid} />
      <div>{String(phone)}</div>
      <h1>이메일</h1>
      <input type="text" onChange={emailValid} />
      <div>{String(email)}</div>
    </>
  );
};

export default RegularExpression;
