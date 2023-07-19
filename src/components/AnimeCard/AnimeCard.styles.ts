import { css } from '@emotion/react';
import styled from '@emotion/styled';

import AppButton from '../AppButton';
import AppColors from '../../styles/AppColors';

export const card = css`
  margin: 1rem auto;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  display: grid;
  grid-template-rows: min-content auto;
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
  margin-top: 8px;
  margin-bottom: 24px;
  padding: 8px 16px;
  max-width: inherit;
`;

export const contentBox = css`
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  white-space: initial;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;

export const title = css`
  display: block;
  max-height: min-content;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  font-weight: bold;
`;

export const duration = css`
  font-size: 12px;
  color: gray;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

export const deleteContainer = css`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const DeleteButton = styled(AppButton)`
  background-color: ${AppColors.gray600};
`