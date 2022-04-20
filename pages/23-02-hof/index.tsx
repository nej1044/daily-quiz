const HOFPage = () => {
  const onClickButton = (number) => () => {
    console.log(number);
  };
  return (
    <>
      <button onClick={onClickButton("123")}>버튼</button>
    </>
  );
};

export default HOFPage;
