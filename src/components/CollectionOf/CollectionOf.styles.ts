import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { mediaQueryMaxWidth } from "../../styles/config";
import AppColors from "../../styles/AppColors";

export const collectionOfStyles = css`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 16px;
  ${mediaQueryMaxWidth[1]} {
    margin-top: 0rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const labelStyles = css`
  font-weight: bold;
  color: ${AppColors.gray600};
  margin-right: 12px;
  ${mediaQueryMaxWidth[1]} {
    margin-bottom: 0.45rem;
  }
`;

export const CollectionItem = styled.div`
  background-color: ${AppColors.green500};
  padding: 4px 16px;
  border-radius: 10px;
  margin-right: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  color: ${AppColors.gray100};
`;