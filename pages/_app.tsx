import "antd/dist/antd.css";
import "../styles/globals.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/components/commons/styles/globalstyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-quill/dist/quill.snow.css";
import { atom, RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import { AppProps } from "next/dist/shared/lib/router/router";

export const globalState = atom({
  key: "editState",
  default: false,
});

export const globalToken = atom({
  key: "globalToken",
  default: "",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
