import { css } from '@emotion/react';
import AppColors from '../../styles/AppColors';

export const appButton = css`
  padding: 8px;
  border-radius: 8px;
  background-color: ${AppColors.pink400};
  border-width: 0;
  align-items: center;
  margin: 8px 0px;
  cursor: pointer;
  font-family: Overpass;
`;

export const buttonText = css`
  color: ${AppColors.gray100}; 
  font-weight: bold;
`