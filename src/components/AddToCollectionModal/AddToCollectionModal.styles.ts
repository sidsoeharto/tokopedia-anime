import styled from "@emotion/styled";

import { mediaQueryMaxWidth } from "../../styles/config";
import AppButton from "../AppButton";
import AppInput from "../AppInput/AppInput.component";
import AppColors from "../../styles/AppColors";

interface CollectionButtonProps {
  isSelected: boolean
}

export const PopupInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${AppColors.gray300};
  margin-bottom: 8px;
  padding-bottom: 8px;
`;

export const PopupContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PopupContentTitle = styled.h2`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const PopupContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  ${mediaQueryMaxWidth[1]}: {
    justify-content: space-evenly;
  }
  margin-bottom: 8px;
`;

export const CollectionButton = styled.span<CollectionButtonProps>`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid gray;
  margin: 4px;
  color: ${({ isSelected }) => isSelected ? "white" : AppColors.gray600};
  background-color: ${({ isSelected }) => isSelected ? AppColors.pink400 : "white"};
  cursor: pointer;
`;

export const AddToButton = styled(AppButton)`
  padding: 14px;
  border-radius: 8px;
`;

export const CollectionInput = styled(AppInput)`
  width: 100%;
  margin: 4px 16px 8px 0px;
`