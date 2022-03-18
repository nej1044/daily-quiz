import * as S from './emotion'
import { useState } from "react";

const notice = [
    {number: 1, title: "9월달 시스템 점검 안내입니다", createdAt: "2020.09.19"},
    {number: 2, title: "안녕하세요! 공지사항 전달드립니다.", createdAt: "2020.09.17"},
    {number: 3, title: "개인정보 처리방침 변경 사전 안내", createdAt: "2020.09.12"},
    {number: 4, title: "iOS 10.0 이하 지원 중단 안내", createdAt: "2020.08.10"},
    {number: 5, title: "이용약관 변경 사전 안내", createdAt: "2020.08.01"},
    {number: 6, title: "개인정보 처리방침 변경 사전 안내", createdAt: "2020.07.19"},
]

const Checkbox=()=>{
    const [checkList, setCheckList] = useState([]);
    console.log(checkList);

    const onClickCheckAll = () => {
        if (checkList.length !== notice.length) {
        setCheckList(notice);
        } else {
        setCheckList([]);
        }
    };

    const onCheckedItem = (el) => {
        // 모든 원소가 조건에 맞으면 true (checkLis에 값이 없음)
        if (checkList.every((cur) => cur.number !== el.number)) {
        setCheckList([...checkList, el]);
        } else {
        // 체크된것만 제외하고 배열에 담는다.
        const result = checkList.filter((cur) => cur.number !== el.number);
        setCheckList(result);
        }
    };

    const isChecked = (el) => {
        return checkList.some((cur) => cur.number === el.number);
    };

    return(
        <>
        <S.Container>
            <S.Wrapper>
                <S.Header>
                    <S.CheckBox><input type="checkbox" onChange={onClickCheckAll} checked={checkList.length === notice.length}/></S.CheckBox>
                    <S.Number>번호</S.Number>
                    <S.Title>제목</S.Title>
                    <S.CreatedAt>작성일</S.CreatedAt>
                </S.Header>
                <div>
                    {notice.map((el,idx)=> (
                        <S.Body key={idx}>
                            <S.CheckBox><input type="checkbox" onChange={() => onCheckedItem(el)} checked={isChecked(el)} /></S.CheckBox>
                            <S.Number>{el.number}</S.Number>
                            <S.Title>{el.title}</S.Title>
                            <S.CreatedAt>{el.createdAt}</S.CreatedAt>
                        </S.Body>
                    ))}
                </div>
            </S.Wrapper>
            <S.Button>선택 삭제</S.Button>
        </S.Container>
        </>
    )
}

export default Checkbox