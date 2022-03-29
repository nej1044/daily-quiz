/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
const classmates = [
  { name: "철수", age: 10, school: "토끼초등학교" },
  { name: "영희", age: 13, school: "다람쥐초등학교" },
  { name: "훈이", age: 10, school: "토끼초등학교" },
];

classmates.filter((el) => {
  if (el.school === "토끼초등학교") {
    el.candy = 10;
  }
});

classmates.filter((el) => {
  if (el.school === "다람쥐초등학교") {
    el.name = el.name + "어린이";
  }
});

classmates;

// [
//     {
//       name: '철수',
//       age: 10,
//       school: '토끼초등학교',
//       candy: 10
//     },
//     { name: '영희어린이', age: 13, school: '다람쥐초등학교' },
//     {
//       name: '훈이',
//       age: 10,
//       school: '토끼초등학교',
//       candy: 10
//     }
//   ]
