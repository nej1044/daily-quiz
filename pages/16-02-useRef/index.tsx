import { useEffect, useRef } from "react";

const useRefPage = () => {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input type="password" ref={inputRef} />
    </>
  );
};

export default useRefPage;
