import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

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

const ImageUploadPreviewPage = () => {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [preview, setPreview] = useState<string>("");
  const [myImages, setMyImages] = useState([]);
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files?.[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(myFile);
    fileReader.onload = (data) => {
      setPreview(String(data.target.result));
      setMyImages((prev) => [...prev, myFile]);
    };
  };

  const onClickSubmit = async () => {
    let myImageUrls = ["", "", ""];
    // 각각 올리기
    // if (myImages.length) {
    //   const start = performance.now();
    //   await uploadFile({ variables: { file: myImages[0] } });
    //   await uploadFile({ variables: { file: myImages[0] } });
    //   await uploadFile({ variables: { file: myImages[0] } });
    //   await uploadFile({ variables: { file: myImages[0] } });
    //   await uploadFile({ variables: { file: myImages[0] } });
    //   const end = performance.now();

    //   console.log(end - start);

    // 동시에 올리기
    if (myImages.length) {
      const start = performance.now();
      // Promise.race : 가장먼저들어오는데이터catch return ([...])
      const result = await Promise.all([
        uploadFile({ variables: { file: myImages[0] } }),
        uploadFile({ variables: { file: myImages[0] } }),
        uploadFile({ variables: { file: myImages[0] } }),
        uploadFile({ variables: { file: myImages[0] } }),
        uploadFile({ variables: { file: myImages[0] } }),
      ]);
      const end = performance.now();

      console.log(end - start);

      myImageUrls = result.map((el) => el.data?.uploadFile.url);
      // const result1 = await uploadFile({ variables: { file: myImages[0] } });
      // myImageUrls[0] = result1.data?.uploadFile.url || "";
      // const result2 = await uploadFile({ variables: { file: myImages[1] } });
      // myImageUrls[1] = result2.data?.uploadFile.url || "";
      // const result3 = await uploadFile({ variables: { file: myImages[2] } });
      // myImageUrls[2] = result3.data?.uploadFile.url || "";

      const board = await createBoard({
        variables: {
          createBoardInput: {
            writer: "은정",
            password: "1234",
            title: "이미지업로드",
            contents: "이미지업로드 연습",
            images: myImageUrls,
          },
        },
      });
      console.log(board);
    }
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <br />
      <img src={preview} width="800px" />
      <button onClick={onClickSubmit}>등록</button>
    </>
  );
};

export default ImageUploadPreviewPage;
