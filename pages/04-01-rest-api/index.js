import axios from "axios"

const RestAPI=()=>{
    const getRestAPI=async()=> {
        const result = await axios.get('https://koreanjson.com/posts/1')
        console.log(result)
      }
    
      return <button onClick={getRestAPI}>REST-API 요청하기</button>
}

export default RestAPI