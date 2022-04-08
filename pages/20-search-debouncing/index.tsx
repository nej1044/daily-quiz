import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
    fetchBoards($search: String, $page: Int) {
        fetchBoards(search: $search, page: $page) {
            _id
            writer
            title
            createdAt
        }
    }
`;

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState(0); // state 추가

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // lodash의 디바운스
  // const getDebounce = _.debounce((data) => {
  //   refetch({ search: data });
  //   setSearch(data);
  // }, 500);

  // 직접 구현
  function getDebounce(data: string) {
    if (debounce) window.clearTimeout(debounce);

    const time = window.setTimeout(() => {
      console.log("실행");
      refetch({ search: data });
      setSearch(data);
    }, 500);

    setDebounce(time);
  }

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    refetch({ search: search, page: Number((event.target as Element).id) });
  }

  return (
    <>
      <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <span>{data.writer}</span>
          <span>{data.title}</span>
          <span>{data.createdAt}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
