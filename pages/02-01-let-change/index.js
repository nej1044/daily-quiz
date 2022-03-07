import React from 'react'

const LetChange=()=>{
    let buttonText = '안녕하세요'

    const changeText=()=>{
        buttonText = '반갑습니다'
        document.getElementById('buttonText').innerText = buttonText
    }

    return(
        <>
            <button id="buttonText" onClick={changeText} >{buttonText}</button>
        </>
    )
}

export default LetChange