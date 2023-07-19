/** @jsxImportSource @emotion/react */

import React from "react";
import {
  animeInfoContainer,
  infoContainer,
  infoTitle,
  infoVal
} from "./AnimeInfo.styles";

interface InfoProps {
  title: string;
  value: string | number;
}

const Info: React.FC<InfoProps> = ({ title, value }) => (
  <div css={infoContainer} data-testid="infoContainer">
    <span css={infoTitle}>{title}</span>
    <span css={infoVal}>{value}</span>
  </div>
);

interface AnimeInfoProps {
  data: {
    seasonYear: string;
    averageScore: number;
    duration: number;
  };
}

const AnimeInfo: React.FC<AnimeInfoProps> = ({ data }) => {
  const { seasonYear, averageScore, duration } = data;

  return (
    <div css={animeInfoContainer} data-testid="animeInfoContainer">
      <Info title="Score" value={`${averageScore}/100`} />
      <Info title="Year" value={seasonYear} />
      <Info title="Duration" value={`${duration} minutes`} />
    </div>
  );
};

export default AnimeInfo;
