import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { mediaQueryMaxWidth } from "../../styles/config";
import AppColors from "../../styles/AppColors";
import AppButton from "../AppButton";
import AppInput from "../AppInput/AppInput.component";

export const popup = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  min-height: 200px;
  padding: 16px;
  border: 2px solid;
  border-color: ${AppColors.gray300};
  background-color: white;
  border-radius: 16px;
  z-index: 25;
  transform: translate(-50%, -50%);
  ${mediaQueryMaxWidth[1]} {
    max-width: 80vw;
  }
`;

export const popupTitle = css`
  font-weight: bolder;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const popupInput = css`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 8px;
  padding-bottom: 8px;
`;

export const popupContentTitle = css`
  font-weight: bold;
  font-size: 16px;
`;

export const CollectionInput = styled(AppInput)`
  width: 100%;
`

export const SaveButton = styled(AppButton)`
  width: 50%;
`;

export const CancelButton = styled(AppButton)`
  width: 50%;
  background-color: ${AppColors.gray400};
  margin-right: 4px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px;
`
