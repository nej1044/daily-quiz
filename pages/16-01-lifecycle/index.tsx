import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LifeCycle = () => {
  const router = useRouter();
  const [isChange, setIsChange] = useState(false);

  const onClickChange = () => {
    setIsChange(true);
  };

  const onClickMove = () => {
    router.push("/");
  };

  useEffect(() => {
    alert("Rendered!!");

    return () => {
      alert("Bye!!");
    };
  }, []);

  useEffect(() => {
    alert("Changed!!");
  }, [isChange]);

  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
};

export default LifeCycle;
