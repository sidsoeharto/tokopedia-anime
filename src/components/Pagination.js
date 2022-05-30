/** @jsxImportSource @emotion/react */

import React from "react";
import AppColors from "../styles/AppColors";

const Pagination = ({ pagination,currentPage, onClick }) => {
  return (
    <div css={{ display: "flex", justifyContent: "space-around", margin: 16 }}>
      {pagination?.map((el, idx) => {
      const isActive = currentPage === el
        return (
          <div
            key={idx.toString()}
            css={{
              padding: '8px 12px',
              borderRadius: 12,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              ...isActive && {
                backgroundColor: AppColors.pink400,
              },
              cursor: el !== "..." ? 'pointer' : 'not-allowed',
            }}
            onClick={() => {
              if (el !== "...") onClick(el);
            }}
          >
            <span css={{color: isActive? AppColors.gray100 : AppColors.pink400, fontWeight: 'bold'}}>{el}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;