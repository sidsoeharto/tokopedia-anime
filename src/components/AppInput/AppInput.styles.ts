import { css } from "@emotion/react";
import AppColors from "../../styles/AppColors";

export const inputLabel = css`
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: bold;
`;

export const input = css`
  border-radius: 8px;
  padding: 16px;
  background-color: ${AppColors.gray200};
  width: 100%;
  border-width: 0;
`;

export const errorTextStyle = css`
  color: ${AppColors.pink400};
  font-size: 12px;
`;