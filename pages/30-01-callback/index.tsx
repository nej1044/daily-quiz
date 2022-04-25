import axios from "axios";
import { useState } from "react";

const CallBackPromiseAsyncAwaitPage = () => {
  const [callback, setCallback] = useState([]);
  const [promise, setPromise] = useState([]);
  const [asyncawait, setAsyncawait] = useState([]);

  const onClickCallback = () => {
    const ccc = new XMLHttpRequest();
    ccc.open("get", "http://numbersapi.com/random?min=1&max=200");
    ccc.send();
    ccc.addEventListener("load", (res) => {
      // @ts-ignore
      const num = res.target.response.split(" ")[0];
      const aaa = new XMLHttpRequest();
      aaa.open("get", `https://koreanjson.com/posts/${num}`);
      aaa.send();
      aaa.addEventListener("load", (res) => {
        const userId = JSON.parse((res.target as any).response).UserId;
        const bbb = new XMLHttpRequest();
        bbb.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        bbb.send();
        bbb.addEventListener("load", (res: any) => {
          const result = JSON.parse(res.target.response);
          setCallback(result);
        });
      });
    });
  };

  const onClickPromise = () => {
    axios.get("http://numbersapi.com/random?min=1&max=200").then((res) => {
      const num = res.data.split(" ")[0];
      axios.get(`http://koreanjson.com/posts/${num}`).then((res) => {
        const userId = res.data.UserId;
        axios
          .get(`http://koreanjson.com/posts?userId=${userId}`)
          .then((res) => {
            setPromise(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    });
  };

  //   new Promise((resolve, reject) => {
  //       // 외부에 요청하기 또는 비동기작업하기
  //       if(성공) resolve()
  //       if(실패) reject()
  //   })

  const onClickAsyncAwait = async () => {
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = res1.data.split(" ")[0];
    const res2 = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = res2.data.UserId;
    const res3 = await axios.get(
      `http://koreanjson.com/posts?userId=${userId}`
    );
    setAsyncawait(res3.data);
  };

  return (
    <>
      <h1>콜백과 칭그덜</h1>
      <div>
        결과:
        {callback.map((el: any, idx) => (
          <div key={idx}>{el.title}</div>
        ))}
      </div>
      <button onClick={onClickCallback}>Callback Request</button>
      <div>
        결과:
        {promise.map((el: any, idx) => (
          <div key={idx}>{el.title}</div>
        ))}
      </div>
      <button onClick={onClickPromise}>Promise Request</button>
      <div>
        결과:
        {asyncawait.map((el: any, idx) => (
          <div key={idx}>{el.title}</div>
        ))}
      </div>
      <button onClick={onClickAsyncAwait}>AsyncAwait Request</button>
    </>
  );
};

export default CallBackPromiseAsyncAwaitPage;
