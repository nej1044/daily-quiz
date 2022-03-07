import { useState } from "react"

const StateCount=()=>{
    const [count, setCount] = useState(0)

    const counter=()=>{
        setCount(count++)
    }
    return(
        <>
            <div>{count}</div>
            <button onClick={counter}>카운트올리기</button>
        </>
    )
}

export default StateCount