import { css } from "@emotion/react";
import { mediaQueryMaxWidth } from "../../styles/config";

export const container = css`
  width: 100%;
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(5,185px);
  justify-content: space-around;
  gap: 0.5rem;
  ${mediaQueryMaxWidth[3]} {
    padding: 0 10px;
    grid-template-columns: repeat(5,minmax(125px,1fr));
    justify-content: center
  }
  ${mediaQueryMaxWidth[2]} {
    grid-template-columns: repeat(2,minmax(105px,1fr));
  }
  ${mediaQueryMaxWidth[1]} {
    grid-template-columns: repeat(2,minmax(100px,1fr));
  }
`;
