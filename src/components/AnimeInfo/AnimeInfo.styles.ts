import { css } from '@emotion/react';

import { mediaQueryMaxWidth } from "../../styles/config";
import AppColors from "../../styles/AppColors";

export const animeInfoContainer = css`
  display: flex;
  margin: 16px 0px;
  justify-content: space-evenly;
`

export const infoContainer = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 16px;
  margin: 0px 8px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 12px;
  ${mediaQueryMaxWidth[1]} {
    padding: 6px;
    margin: 2px;
  }
`;

export const infoTitle = css`
  font-weight: bolder;
  display: block;
  font-size: 16px;
  ${mediaQueryMaxWidth[1]} {
    font-size: 14px;
  }
`;

export const infoVal = css`
  color: ${AppColors.gray400};
  font-size: 14px;
  ${mediaQueryMaxWidth[1]} {
    font-size: 11px;
  }
`;
