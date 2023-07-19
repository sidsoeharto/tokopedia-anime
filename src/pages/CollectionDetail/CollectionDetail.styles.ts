import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { mediaQueryMaxWidth } from "../../styles/config";
import { AppButton } from "../../components";

export const mainContainer = css`
  padding: 16px;
  min-height: 85vh;
`;

export const buttonContainer = css`
  justify-content: flex-end;
  display: flex;
`;

export const EditButton = styled(AppButton)`
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

export const buttonIcon = css`
  margin-right: 8px;
  display: inline-flex;
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(5,185px);
  justify-content: space-around;
  gap: 0.5rem;
  ${mediaQueryMaxWidth[3]} {
    padding: 0px;
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