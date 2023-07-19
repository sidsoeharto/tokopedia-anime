import { css } from "@emotion/react";
import AppColors from "../../styles/AppColors";

export const container = css`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: start;
`;

export const genre = css`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${AppColors.gray100};
  padding: 0.2rem 0.9rem;
  border-radius: 99px;
  background-color: ${AppColors.pink400};
  margin-right: 4px;
  margin-bottom: 4px;
`;
