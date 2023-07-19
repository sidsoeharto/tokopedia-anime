import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { mediaQueryMaxWidth } from "../../styles/config";
import AppColors from "../../styles/AppColors";

interface PaginationItemProps {
  isActive: boolean;
  item: number | string;
}

export const paginationContainer = css`
  display: inline-flex;
  justify-content: center;
  margin: 1em auto;
  -webkit-text-size-adjust: 100%;
  width: 100%;
  font-size: 16pt;
  ${mediaQueryMaxWidth[1]} {
    font-size: 0.9rem;
    margin: 0.75em auto;
    padding: 1rem 0px;
  }
  ${mediaQueryMaxWidth[0]} {
    font-size: 0.75rem;
    margin: 0.6em auto;
    padding: 1rem 0px;
  }
`;

export const chevronLeft = (currentPage: number) => css`
  padding: 0.6em 0.65em;
  cursor: ${currentPage > 1 ? "pointer" : "not-allowed"};
  opacity: ${currentPage > 1 ? 1 : 0.75};
  ${mediaQueryMaxWidth[1]} {
    padding: 0.45em 0.4em;
  }
`;

export const chevronRight = (currentPage: number) => css`
  padding: 0.6em 0.65em;
  cursor: ${currentPage < 1000 ? "pointer" : "not-allowed"};
  opacity: ${currentPage < 1000 ? 1 : 0.75};
  ${mediaQueryMaxWidth[1]} {
    padding: 0.45em 0.4em;
  }
`;

export const PaginationItem = styled.div<PaginationItemProps>`
  padding: 0.6em 1em;
  border-radius: 4px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: ${({ item }) => typeof item !== "string" ? "pointer" : "not-allowed"};
  ${({ isActive }) => isActive && `background-color: ${AppColors.green500}`};
  ${mediaQueryMaxWidth[1]} {
    padding: 0.45em 0.8em;
  }
`
