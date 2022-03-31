import styled from "@emotion/styled";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      writer
      title
    }
  }
`;
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Container = styled.div`
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// boardList style
const ListWrapper = styled.div`
  width: 800px;
`;
const ListHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  font-weight: bold;
  color: #fff;
  background-color: #000;
`;
const ListHeaderNumber = styled.div`
  width: 10%;
  border-right: 1px solid #fff;
`;
const ListHeaderTitle = styled.div`
  width: 50%;
  border-right: 1px solid #fff;
`;
const ListHeaderWriter = styled.div`
  width: 20%;
  border-right: 1px solid #fff;
`;
const ListHeaderDate = styled.div`
  width: 20%;
`;
const ListContents = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  border-bottom: 1px solid #eaeaea;
`;
const ListItemNumber = styled.div`
  width: 10%;
`;
const ListItemTitle = styled.div`
  width: 50%;
`;
const ListItemWriter = styled.div`
  width: 20%;
`;
const ListItemDate = styled.div`
  width: 20%;
`;

// pagination style
const PageWrapper = styled.div``;
interface IPageProps {
  isActive?: boolean;
}
const Page = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "#ffd400" : "#000")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "nomal" : "pointer")};
`;

// pagination component
const Pagenation = (props) => {
  console.log("Ddd", props);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = Math.ceil(Number(props.count) / 10);

  const onClickPage = (event) => {
    const activedPage = Number(event.target.id);
    setActivedPage(activedPage);
    props.refetch({ page: activedPage });
  };
  const onClickPrevPage = () => {
    if (props.startPage <= 1) return;
    setActivedPage(props.startPage - 10);
    props.setStartPage((prev) => prev - 10);
  };
  const onClickNextPage = () => {
    if (props.startPage + 10 > lastPage) return;
    setActivedPage(props.startPage + 10);
    props.setStartPage((prev) => prev + 10);
  };

  return (
    <PageWrapper>
      <Page onClick={onClickPrevPage}>{`<`}</Page>
      {new Array(10)
        .fill(1)
        .filter((_, index) => {
          const currentPage = props.startPage + index;
          return currentPage <= lastPage;
        })
        .map((_, index) => (
          <Page
            key={props.startPage + index}
            id={String(props.startPage + index)}
            onClick={onClickPage}
            isActive={props.startPage + index === activedPage}
          >
            {props.startPage + index}
          </Page>
        ))}
      <Page onClick={onClickNextPage}>{`>`}</Page>
    </PageWrapper>
  );
};

const Pagination = () => {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: count } = useQuery(FETCH_BOARDS_COUNT);

  return (
    <Container>
      <Wrapper>
        <ListWrapper>
          <ListHeader>
            <ListHeaderNumber>번호</ListHeaderNumber>
            <ListHeaderTitle>제목</ListHeaderTitle>
            <ListHeaderWriter>작성자</ListHeaderWriter>
            <ListHeaderDate>작성일자</ListHeaderDate>
          </ListHeader>
          {data?.fetchBoards.map((data, index) => (
            <ListContents key={data._id}>
              <ListItemNumber>{index + 1}</ListItemNumber>
              <ListItemTitle>{data.title}</ListItemTitle>
              <ListItemWriter>{data.writer}</ListItemWriter>
              <ListItemDate></ListItemDate>
            </ListContents>
          ))}
        </ListWrapper>
        <Pagenation
          refetch={refetch}
          startPage={startPage}
          setStartPage={setStartPage}
          count={count?.fetchBoardsCount}
        />
      </Wrapper>
    </Container>
  );
};
export default Pagination;
