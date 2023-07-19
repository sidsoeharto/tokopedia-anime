/** @jsxImportSource @emotion/react */

import React from "react";
import { render, screen } from "@testing-library/react";
import AnimeInfo from "./";
import { animeInfoContainer, infoContainer, infoTitle, infoVal } from "./AnimeInfo.styles";

describe("AnimeInfo", () => {
  const data = {
    seasonYear: "2021",
    averageScore: 80,
    duration: 30,
  };

  it("should render properly", () => {
    render(<AnimeInfo data={data} />);

    expect(screen.getByText("Score")).toBeInTheDocument();
    expect(screen.getByText("Year")).toBeInTheDocument();
    expect(screen.getByText("Duration")).toBeInTheDocument();
    expect(screen.getByText("80/100")).toBeInTheDocument();
    expect(screen.getByText("2021")).toBeInTheDocument();
    expect(screen.getByText("30 minutes")).toBeInTheDocument();
  });
});