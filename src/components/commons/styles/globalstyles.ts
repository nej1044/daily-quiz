import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    font-size: 30px;
    text-align: center;
    font-family: "Dongle";
  }

  @font-face {
    font-family: "Dongle";
    src: url("/fonts/Dongle-Regular.ttf");
  }
`;
