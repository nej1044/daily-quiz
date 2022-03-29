import styled from "@emotion/styled";
// import { useRouter } from "next/router";
import { ReactChild } from "react";
import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";
import SideBar from "./sidebar";

// const HIDDEN_HEADERS = ["/12-05-modal-address-state-prev", "1", "2"];
interface ILayoutProps {
  children: ReactChild;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: brown;
`;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Body = styled.section`
  width: 100%;
  height: 700px;
`;

const Layout = (props: ILayoutProps) => {
  //   const router = useRouter();
  //   const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <Wrapper>
      {/* {!isHiddenHeader && <Header />} */}
      <Header />
      <Banner />
      <Navigation />
      <BodyWrapper>
        <SideBar />
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
