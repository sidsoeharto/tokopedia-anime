import { css } from "@emotion/react";

import { mediaQueryMaxWidth } from "../../styles/config";
import AppColors from "../../styles/AppColors";

export const headerContainer = css`
  position: sticky;
  top: 0;
  z-index: 3;
`;

export const headerSubContainer = css`
  height: 5vh;
  padding: 0.5rem 2rem;
  background-color: ${AppColors.green600};
  display: flex;
  align-items: center;
  justify-content: space-between;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07))
    drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));
`;

export const backIcon = css`
  margin-right: 12px;
  color: ${AppColors.gray100};
  display: inline-flex;
  cursor: pointer;
`;

export const titleContainer = css`
  background: none;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const title = css`
  margin-top: 2px;
  font-size: 18px;
  font-weight: bolder;
  display: inline-flex;
  align-items: center;
  color: ${AppColors.gray100};
`;

export const collectionContainer = css`
  background: ${AppColors.pink500};
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  border: none;
  display: inline-flex;
  align-items: center;
  color: ${AppColors.pink100};
  font-family: Overpass, sans-serif;
  font-size: 0.9rem;
  flex-direction: row;
  cursor: pointer;
  ${mediaQueryMaxWidth[1]} {
    font-size: 0.8rem;
    padding: 4px 8px;
  }
`;

export const collectionIcon = css`
  margin-right: 6px;
  display: inline-block;
`;
