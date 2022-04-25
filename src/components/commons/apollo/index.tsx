import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { useRecoilState } from "recoil";
import { globalToken } from "../../../../pages/_app";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";

import { onError } from "@apollo/client/link/error";
import getAccessToken from "../../../commons/libraries/getAccessToken";

const ApolloSetting = (props) => {
  const [accessToken, setAccessToken] = useRecoilState(globalToken);

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setUserInfo(userInfo);
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICAED") {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);

            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
