import { useEffect } from "react";
import { useRecoilState } from "recoil";
import ContextAPI from "../../../src/components/units/21-03-context-api/contextapi";
import { editState } from "../../_app";

const ContextAPIEditPage = () => {
    const [, setIsEdit] = useRecoilState(editState)

    useEffect(()=> {
        setIsEdit(true)
    }, [])
  return <ContextAPI />;
};

export default ContextAPIEditPage;
