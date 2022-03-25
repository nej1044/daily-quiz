import ComponentUI from "./Component.presenter";

const Component = (props) => {
  return <ComponentUI isEdit={props.isEdit} />;
};

export default Component;
