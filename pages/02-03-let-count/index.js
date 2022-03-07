const LetCount=()=>{
    let count = 0;

    const counter=()=>{
        count++
        document.getElementById('count').innerText = count
    }
    return(
        <>
            <div id="count">0</div>
            <button onClick={counter}>카운트올리기</button>
        </>
    )
}

export default LetCount