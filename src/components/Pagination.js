/** @jsxImportSource @emotion/react */

import React from "react";
import AppColors from "../styles/AppColors";

const Pagination = ({ pagination,currentPage, onClick }) => {
  return (
    <div css={{ display: "flex", justifyContent: "space-around", margin: 16 }}>
      {pagination?.map((v, i) => {
      const isActive = currentPage === v
        return (
          <div
            key={i.toString()}
            css={{
              padding: '8px 12px',
              borderRadius: 12,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              ...isActive && {
                backgroundColor: AppColors.pink400,
              }
            }}
            onClick={() => {
              if (v !== "...") onClick(v);
            }}
          >
            <span css={{color: isActive? AppColors.gray100 : AppColors.pink400, fontWeight: 'bold'}}>{v}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;