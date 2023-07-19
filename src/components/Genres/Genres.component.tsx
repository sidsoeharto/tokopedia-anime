/** @jsxImportSource @emotion/react */

import React from "react";
import { container, genre } from "./Genres.styles";

interface GenresProps {
  genres: string[];
}

const Genres: React.FC<GenresProps> = ({ genres }) => {
  return (
    <div css={container}>
      {genres.map((el, idx) => {
        return (
          <span key={idx.toString()} css={genre} data-testid="genre">
            {el}
          </span>
        );
      })}
    </div>
  );
};

export default Genres;
