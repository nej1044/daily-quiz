import * as S from './style'
import {CloseCircleFilled} from '@ant-design/icons'
import { useState } from 'react'

const StateLogin=()=>{
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [errorId, setErrorId] = useState('')
    const [errorPw, setErrorPw] = useState('')

    function handleChangeId(event) {
        const value = event.target.value
        setId(value)
    }

    function handleChangePw(event) {
        const value = event.target.value
        setPw(value)
    }

    function handleClickLogin() {
        // 아이디 검증
        if(id.includes('@') !== true|| id === '') {
            setErrorId('이메일 주소를 다시 확인해주세요.')
        } else {
            setErrorId('')
        }
        // 비밀번호 검증
        if(pw === "" || pw.length < 8) {
            setErrorPw('8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.')
        } else {
            setErrorPw('')
        }
    }

    return(
        <S.Wrapper>
            <S.Header>
                <S.ImgWrapper>
                    <S.LogoUnderline src="./images/02-state-login/logo-underline.png" />
                    <S.Logo src="./images/02-state-login/logo.png" />
                </S.ImgWrapper>
                <S.LogoTitle>잇츠로드</S.LogoTitle>
            </S.Header>
            <S.Body>
                <S.LoginWrapper>
                    <S.InputWrapper>
                        <S.Input type="text" onChange={handleChangeId} value={id} /> 
                        <CloseCircleFilled style={{ color: "rgba(255,255,255,0.4)", fontSize: "20px"}} />
                    </S.InputWrapper>
                    <S.ErrorText>{errorId}</S.ErrorText>
                    <S.InputWrapper>
                        <S.Input type="password" onChange={handleChangePw} value={pw} />
                        <CloseCircleFilled style={{ color: "rgba(255,255,255,0.4)", fontSize: "20px"}} />
                    </S.InputWrapper>
                    <S.ErrorText>{errorPw}</S.ErrorText>
                </S.LoginWrapper>
                <S.SubmitBtn onClick={handleClickLogin}>로그인</S.SubmitBtn>
            </S.Body>
            <S.FindWrapper>
                <S.FindText>이메일 찾기</S.FindText>
                <S.FindPw>비밀번호 찾기</S.FindPw>
                <S.FindText>회원가입</S.FindText>
            </S.FindWrapper>
            <S.Footer>
                <S.KaKaoBtn>카카오톡으로 로그인</S.KaKaoBtn>
            </S.Footer> 
        </S.Wrapper>
    )
}

export default StateLogin