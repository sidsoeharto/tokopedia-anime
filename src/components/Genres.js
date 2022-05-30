/** @jsxImportSource @emotion/react */

import React from "react";

const Genres = ({ genres }) => {
  return (
    <div css={{ display: "inline-flex", flexWrap: "wrap" }}>
      {genres.map((el, idx, arr) => {
        const isLast = idx === arr.length - 1;
        return (
          <span key={idx.toString()} css={{ fontSize: 14, color: "gray" }}>
            {el}
            {!isLast && `,`}&nbsp;
          </span>
        );
      })}
    </div>
  );
};

export default Genres;