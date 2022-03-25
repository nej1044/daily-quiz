import { Rate } from "antd";
import { useState } from "react";

const desc = ["1점", "2점", "3점", "4점", "5점"];

const StarPage = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (value: number) => {
    setValue(value);
    if (value === 3) {
      alert("3점");
    }
  };

  return (
    <>
      <Rate onChange={handleChange} value={value} />
      <div>
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
      </div>
    </>
  );
};

export default StarPage;

// import { Rate } from "antd";
// import { useState } from "react";

// export default function Star() {
//   const [value, setValue] = useState(3);

//   function handleChange(value: number) {
//     setValue(value);
//   }

//   return <Rate onChange={handleChange} value={value} />;
// }
