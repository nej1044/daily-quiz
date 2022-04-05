import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";

interface ImyInput {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

const ImageUploadPage = () => {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const fileRef = useRef<HTMLInputElement>(null);
  const [myImages, setMyImages] = useState<String[]>([]);
  const [myInput, setMyInput] = useState<ImyInput>({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const hanldeChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setMyInput({
      ...myInput,
      [event.target.name]: event.target.value,
    });
  };

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          ...myInput,
          images: myImages,
        },
      },
    });
    console.log(result);
    setMyInput({
      writer: "",
      title: "",
      password: "",
      contents: "",
    });
    setMyImages([]);
  };

  const onClickMyImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files?.[0];

    if (!myFile?.size) {
      alert(`파일이 없습니다.`);
      return;
    }

    if (myFile.size > 5 * 1024 * 1024) {
      alert(`5MB 미만의 파일을 업로드하십시오.`);
      return;
    }

    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert(`jpeg 또는 png 파일 형식만 업로드 가능합니다.`);
      return;
    }
    try {
      const result = await uploadFile({ variables: { file: myFile } });
      console.log(result.data.uploadFile.url);
      alert("사진을 업로드 하였습니다.");
      setMyImages([result.data.uploadFile.url]);
    } catch (error) {
      alert(`사진 업로드에 실패했습니다.`);
    }
  };

  return (
    <>
      <h1>이미지 업로드</h1>
      작성자{" "}
      <input
        type="text"
        onChange={hanldeChangeInputs}
        name="writer"
        value={myInput.writer}
      />
      <br />
      비밀번호{" "}
      <input
        type="text"
        onChange={hanldeChangeInputs}
        name="password"
        value={myInput.password}
      />
      <br />
      제목{" "}
      <input
        type="text"
        onChange={hanldeChangeInputs}
        name="title"
        value={myInput.title}
      />
      <br />
      내용{" "}
      <input
        type="text"
        onChange={hanldeChangeInputs}
        name="contents"
        value={myInput.contents}
      />
      <br />
      <input
        type="file"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={onChangeFile}
      />
      <div
        onClick={onClickMyImage}
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
      >
        이미지 선택
      </div>
      ;<button onClick={onClickSubmit}>저장하기</button>
    </>
  );
};

export default ImageUploadPage;
