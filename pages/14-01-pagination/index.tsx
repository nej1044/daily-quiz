import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const PageContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Pagination = () => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: 1 } });
  const { data: fetchcounts } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);

  const [startPage, setStartPage] = useState(1);
  const lastPage = fetchcounts
    ? Math.ceil(fetchcounts.fetchBoardsCount / 10)
    : 0;

  const movePage = (idx) => {
    refetch({ page: idx + 1 });
  };

  const prevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  };

  const nextPage = () => {
    setStartPage((prev) => prev + 10);
  };

  return (
    <>
      {data?.fetchBoards.map((el, idx) => (
        <ListContainer onClick={prevPage} key={idx}>
          <span>{idx + 1}</span>
          <span>{el.title}</span>
          <span>{el.writer}</span>
          <span>{el.createdAt}</span>
        </ListContainer>
      ))}
      <PageContainer>
        <LeftOutlined />
        {new Array(10).fill(1).map(
          (_, idx) =>
            startPage + 10 <= lastPage && (
              <span key={idx} onClick={() => movePage(idx)}>
                {startPage + idx}
              </span>
            )
        )}
        <RightOutlined onClick={nextPage} />
      </PageContainer>
    </>
  );
};

export default Pagination;
