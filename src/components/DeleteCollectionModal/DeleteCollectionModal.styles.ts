import { css } from "@emotion/react";

import { mediaQueryMaxWidth } from "../../styles/config";
import AppColors from "../../styles/AppColors";

// Base styles
const baseStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Size styles
const sizeStyles = css`
  width: 100%;
  max-width: 300px;
  min-height: 200px;
  padding: 16px;
  ${mediaQueryMaxWidth[1]} {
    max-width: 80vw;
  }
`;

// Position styles
const positionStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Border styles
const borderStyles = css`
  border: 2px solid;
  border-color: ${AppColors.gray300};
`;

// Background styles
const backgroundStyles = css`
  background-color: white;
`;

// Border radius styles
const borderRadiusStyles = css`
  border-radius: 16px;
`;

// Z-index styles
const zIndexStyles = css`
  z-index: 25;
`;

// Title styles
const titleStyles = css`
  font-weight: bolder;
  font-size: 20px;
`;

// Margin styles
const marginStyles = css`
  margin-bottom: 20px;
`;

// Input styles
const inputStyles = css`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding-bottom: 8px;
`;

// Content title styles
const contentTitleStyles = css`
  font-weight: bold;
  font-size: 16px;
`;

// Text align styles
const textAlignStyles = css`
  text-align: center;
`;

export const popup = css`
  ${baseStyles};
  ${sizeStyles};
  ${positionStyles};
  ${borderStyles};
  ${backgroundStyles};
  ${borderRadiusStyles};
  ${zIndexStyles};
`;

export const popupTitle = css`
  ${titleStyles};
  ${marginStyles};
`;

export const popupInput = css`
  ${inputStyles};
`;

export const popupContentTitle = css`
  ${contentTitleStyles};
  ${textAlignStyles};
`;
