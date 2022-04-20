import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

interface FormValues {
  writer?: string;
  title: string;
  password?: string;
  contents: string;
}

const WebEditor = () => {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const { handleSubmit, register, setValue, trigger } = useForm();

  const handleChange = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickSubmit = async (data: FormValues) => {
    const result = await createBoard({
      variables: { createBoardInput: { ...data } },
    });
    console.log(result);
    router.push(`/27-01-web-editor/${result.data?.createBoard._id}`);
  };

  return (
    <>
      <h1>게시글 작성</h1>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자: <input type="text" {...register("writer")} />
        <br />
        비밀번호: <input type="password" {...register("password")} />
        <br />
        제목: <input type="text" {...register("title")} />
        <br />
        {/* 내용: <textarea {...register("contents")} /> */}
        내용: <ReactQuill onChange={handleChange} />
        <br />
        <button>게시글 등록</button>
      </form>
    </>
  );
};

export default WebEditor;
