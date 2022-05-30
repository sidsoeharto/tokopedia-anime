/** @jsxImportSource @emotion/react */

import React from "react";
import AppColors from "../styles/AppColors";

const CollectionOf = ({ collectionOf }) => {
  return (
    <div css={{ display: "inline-flex", flexWrap: "wrap", marginTop: 16 }}>
      <span css={{fontWeight: 'bold', color: AppColors.gray400, marginRight: 4}}>Collection of:</span>
      {collectionOf.map((el, idx, arr) => {
          const isLast = idx === arr.length - 1
          return(
            <span key={idx.toString()} css={{color: AppColors.gray400}}>{el}{!isLast&&`,`}&nbsp;</span>
          )
      })}
    </div>
  );
};

export default CollectionOf;