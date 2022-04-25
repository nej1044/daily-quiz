import { useForm } from "react-hook-form";
const ReactHookFormPage = () => {
  const { handleSubmit, register } = useForm();

  interface FormValues {
    myEmail: string;
    myPassword: string;
  }

  const onClickLogin = (data: FormValues) => {
    // loginUser API 요청\
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      이메일: <input type="text" {...register("myemail")} />
      비밀번호: <input type="password" {...register("myPassword")} />
      <button>로그인</button>
    </form>
  );
};

export default ReactHookFormPage;
