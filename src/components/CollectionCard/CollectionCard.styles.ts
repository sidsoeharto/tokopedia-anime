import { css } from '@emotion/react';
import styled from '@emotion/styled';

import AppButton from '../AppButton';
import AppColors from "../../styles/AppColors";


export const card = css`
  margin: 1rem auto;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  display: grid;
  grid-template-rows: min-content auto;
`;

export const cardTitle = css`
  display: block;
  max-height: min-content;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  font-weight: bold;
  text-align: center;
  font-size: 1.2rem;
`;

export const imageContainer = css`
  box-shadow: 0 14px 30px rgba(0, 0, 0,.15),0 4px 4px rgba(0, 0, 0,.05);
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 265px;
  overflow: hidden;
  position: relative;
  border-radius: 16px;
  zIndex: 2;
`;

export const image = css`
  height: auto;
  width: 100%;
  object-fit: cover;
  object-position: center;
  vertical-align: text-top;
`;

export const contentContainer = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 24px;
  padding: 8px 16px;
  max-width: inherit;
`;

export const contentBox = css`
  display: flex;
  flex-grow: 0;
  width: 100%;
  flex-direction: column;
  white-space: initial;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DeleteButton = styled(AppButton)`
  background-color: ${AppColors.gray600};
  margin-right: 4px;
`

export const EditButton = styled(AppButton)`
  background-color: ${AppColors.green500};
`
