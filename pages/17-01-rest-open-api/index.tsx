import axios from "axios";
import { useEffect, useState } from "react";

const RestOpenAPI = () => {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result: any = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setDogUrl(result.data.message);
    };
    fetchDog();
  });
  return (
    <>
      <div>오픈API</div>
      <img src={dogUrl} />
    </>
  );
};

export default RestOpenAPI;
