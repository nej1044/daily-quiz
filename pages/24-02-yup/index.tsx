import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

interface FormValues {
  myEmail: string;
  myPassword: string;
}

const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일을 입력해주세요"),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자 이상입니다.")
    .max(15, "비밀번호는 최대 15자 입니다.")
    .required("비밀번호를 입력해주세요"),
});

const ReactHookFormPage = () => {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickLogin = (data: FormValues) => {
    // loginUser API 요청\
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onClickLogin)}>
        이메일: <input type="text" {...register("myEmail")} />
        <div>{formState.errors.myEmail?.message}</div>
        비밀번호: <input type="password" {...register("myPassword")} />
        <div>{formState.errors.myPassword?.message}</div>
        <button>로그인</button>
      </form>
    </>
  );
};

export default ReactHookFormPage;
