import { useState } from "react"
import { Error } from "./style"

export default function SignupStatePage () {
    const [id, setId] = useState('')
    const [pw1, setPw1] = useState('')
    const [pw2, setPw2] = useState('')
		const [errorId, setErrorId] = useState('')
    const [errorPw1, setErrorPw1] = useState('')
    const [errorPw2, setErrorPw2] = useState('')

    function handleChangeId(event) {
        const value = event.target.value
        setId(value)
    }

    function handleChangePw1(event) {
        const value = event.target.value
        setPw1(value)
    }

    function handleChangePw2(event) {
        const value = event.target.value
        setPw2(value)
    }

		function handleClickLogin() {
        // 아이디 검증
        if(id.includes('@') !== true|| id === '') {
            setErrorId('아이디를 정확히 입력해 주세요.')
        } else {
          setErrorId('')
        }
        // 비밀번호 검증
        if(pw1 === "") {
            setErrorPw1('비밀번호를 정확히 입력해 주세요.')
        } else {
          setErrorPw1('')
        }
        if(pw2 === "" || pw2 !== pw1) {
            setErrorPw2('비밀번호를 정확히 입력해 주세요.')
        } else {
          setErrorPw2('')
        }
    }

    return (
        <>
          <div>이메일</div>
          <input type="text" onChange={handleChangeId} placeholder="이메일을 입력해주세요" value={id}/>
          <Error>{errorId}</Error>
          <div>비밀번호</div>
          <input type="password" onChange={handleChangePw1} placeholder="비밀번호를 입력해주세요" value={pw1} />
          <Error>{errorPw1}</Error>
          <div>비밀번호 확인</div>
          <input type="password" onChange={handleChangePw2} placeholder="비밀번호를 다시 입력해주세요" value={pw2} />
          <Error>{errorPw2}</Error>
          <button onClick={handleClickLogin}>가입하기</button>
        </>
    )
}