import { useRecoilState } from "recoil";
import { globalState } from "../../../../pages/_app";

// interface IPropsContextAPI {
//   isEdit?: boolean;
// }

const ContextAPI = () => {
  const [isEdit] = useRecoilState(globalState);
  return (
    <>
      <div>{isEdit ? "수정" : "등록"}페이지</div>
    </>
  );
};

export default ContextAPI;
