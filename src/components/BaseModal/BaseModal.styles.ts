import styled from '@emotion/styled';
import Modal from "react-modal";

import { mediaQueryMaxWidth } from '../../styles/config';
import AppColors from "../../styles/AppColors";
import AppButton from '../AppButton/AppButton.component';

export const Popup = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 300px;
  min-height: 200px;
  padding: 16px;
  border: 2px solid;
  border-color: ${AppColors.gray300};
  background-color: white;
  border-radius: 16px;
  z-index: 25;
  ${mediaQueryMaxWidth[1]} {
    max-width: 80vw;
  }
`;

export const PopupTitle = styled.h2`
  font-weight: bolder;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px;
`

export const ConfirmButton = styled(AppButton)`
  width: 50%;
`

export const CancelButton = styled(AppButton)`
  width: 50%;
  background-color: ${AppColors.gray400};
  margin-right: 4px;
`