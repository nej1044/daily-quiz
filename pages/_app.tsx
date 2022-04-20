import "antd/dist/antd.css";
import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/components/commons/styles/globalstyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-quill/dist/quill.snow.css';
// import { createContext, useState } from "react";
import { atom, RecoilRoot } from "recoil";

// export const GlobalContext = createContext<object | undefined>(null);

export const editState = atom({
  key: "editState",
  default: false,
});

function MyApp({ Component, pageProps }) {
  // const [accessToken, setAccessToken] = useState("");
  // const value = {
  //   accessToken,
  //   setAccessToken,
  // };

  const client = new ApolloClient({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    // <GlobalContext.Provider value={value}>
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </RecoilRoot>
    // </GlobalContext.Provider>
  );
}

export default MyApp;
