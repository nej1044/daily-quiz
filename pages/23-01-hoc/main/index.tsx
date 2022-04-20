import { withAuth } from "../../../src/components/commons/hoc/withAuth";

const mainPage = () => {
  return <div>메인페이지</div>;
};

export default withAuth(mainPage);
