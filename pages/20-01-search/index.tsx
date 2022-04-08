import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;

const PageContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Search = () => {
  const [search, setSearch] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { search: search } });
  const { data: fetchcounts } = useQuery<Pick<IQuery, "fetchBoardsCount">>(
    FETCH_BOARDS_COUNT,
    { variables: { search: search } }
  );

  const [startPage, setStartPage] = useState(1);
  const lastPage = fetchcounts
    ? Math.ceil(fetchcounts.fetchBoardsCount / 10)
    : 0;

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const movePage = (idx) => {
    refetch({ page: idx + 1 });
  };

  const prevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  };

  const nextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  };

  return (
    <>
      <input type="text" onChange={onChangeSearch} />
      <div>
        {data?.fetchBoards.map((el, index) => (
          <div key={index}>
            <span>
              {el.title
                .replaceAll(search, `%^&${search}%^&`)
                .split("%^&")
                .map((el, idx) => (
                  <span
                    key={idx}
                    style={{ color: `${el === search ? "white" : "black"}` }}
                  >
                    {el}
                  </span>
                ))}
            </span>
            <span>{el.contents}</span>
          </div>
        ))}
      </div>
      <PageContainer>
        <LeftOutlined onClick={prevPage} />
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

export default Search;
