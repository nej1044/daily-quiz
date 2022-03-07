import { useState } from "react"

const StateChange =()=>{
    const [buttonText, setButtonText] = useState('안녕하세요')

    const changeText=()=>{
        setButtonText('반갑습니다')
    }
    return(
        <>
            <button onClick={changeText} >{buttonText}</button>
        </>
    )
}

export default StateChange