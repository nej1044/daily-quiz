import Presenter from "./propsdataprev.container";

export default function Container() {
  return (
    <>
      {/* <Presenter child="철수" /> */}
      {/* {Presenter({ child: "철수" })} */}
      {/* <Presenter child="철수" age={13} /> */}
      {Presenter({ child: "철수", age: 13 })}
    </>
  );
}
