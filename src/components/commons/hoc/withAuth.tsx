/* eslint-disable react/display-name */
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { globalToken } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(globalToken);

  useEffect(() => {
    if (!accessToken) {
      alert("로그인이 필요합니다");
      router.push("/23-01-hof/login");
    }
  }, []);

  return <Component {...props} />
};
