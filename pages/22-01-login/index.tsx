import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($password: String, $email: String) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

const LoginPage = () => {
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const { setAccessToken } = useContext<any>(GlobalContext);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({ variables: { ...inputs } });
      console.log(result);
      setAccessToken(result.data?.loginUser.accessToken);
      alert(`로그인하였습니다.`);
    } catch (error) {
      if (error instanceof Error)
        alert(`로그인에 실패했습니다 ${error.message}`);
    }
  };

  return (
    <>
      이메일:
      <input type="text" name="email" onChange={handleChangeInputs} />
      <br />
      비밀번호:
      <input type="password" name="password" onChange={handleChangeInputs} />
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
};

export default LoginPage;
