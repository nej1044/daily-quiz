import { useState } from "react"

const StateToken=()=>{
    const [token, setToken] = useState('000000')

    const getToken=()=>{
        setToken(String(Math.floor(Math.random() * 1000000)).padStart(6, '0'))
    }
    return(
        <>
            <div>{token}</div>
            <button onClick={getToken}>인증번호전송</button>
        </>
    )
}

export default StateToken