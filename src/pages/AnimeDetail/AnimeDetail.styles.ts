import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { mediaQueryMaxWidth } from "../../styles/config";
import { AppButton } from "../../components";

type BannerProps = {
  backgroundImage: string
}

export const mainContainer = css`
  position: relative;
`;

export const container = css`
  position: relative;
  z-index: 2;
`

export const BannerContainer = styled.div<BannerProps>`
  ${({ backgroundImage }) => backgroundImage ? `background-image: url(${backgroundImage});` :  'background-color: #222;'}
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  margin-top: -58px;
`

export const ShadowBanner = styled.div`
  background: linear-gradient(180deg,rgba(6,13,34,0) 40%,rgba(6,13,34,.6));
  height: 100%;
  width: 100%;
`

export const SectionContainer = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 215px auto;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
  ${mediaQueryMaxWidth[1]} {
    grid-template-columns: auto;
    padding: 0;
    max-width: 100%;
  }
`

export const imageContainer = css`
  position: relative;
  margin-top: -150px;
  ${mediaQueryMaxWidth[1]} {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    margin-top: 0px;
  }
`;

export const imageContainerInner = css`
  position: static;
  ${mediaQueryMaxWidth[1]} {
    margin: 0 auto;
    margin-top: -100px;
    max-width: 50%;
  }
`;

// display: flex;
// flex-direction: column;
// height: 100%;
// width: 100%;
// margin-top: -150px;
// justify-content: center;

export const AnimeTitle = styled.h1`
  font-weight: 600;
  font-size: 1.75rem;
  ${mediaQueryMaxWidth[1]} {
    margin: 0.5rem 0;
  }
`

export const image = css`
  width: 100%;
  height: 265px;
  border-radius: 16px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.05);
  object-fit: cover;
`;

export const addToContainer = css`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 0.2rem 0.5rem;
  flex-direction: row;
`;

export const AddToButton = styled(AppButton)`
  width: 100%;
  border-radius: 20px;
  padding: 0.75rem;
`;

export const ContentContainer = styled.div`
  display: inline-grid; 
  grid-template-rows: min-content min-content min-content;
  padding: 16px;
  text-align: left;
  ${mediaQueryMaxWidth[1]} {
    padding: 0 0.5rem;
    text-align: center;
  }
`;
// display: flex;
// flex-direction: column;

export const AnimeDescription = styled.div`
  text-align: justify;
  padding-bottom: 2rem;
`;

export const addButtonIcon = css`
  margin-right: 4px;
`;