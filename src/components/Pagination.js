/** @jsxImportSource @emotion/react */

import React from "react";
import AppColors from "../styles/AppColors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Pagination = ({ pagination, currentPage, onClick }) => {
  return (
    <div css={{ display: "flex", justifyContent: "space-around", margin: 16 }}>
      <FontAwesomeIcon
        icon={solid('chevron-left')}
        color={currentPage > 1 ? AppColors.green500 : AppColors.gray300}
        size='1x'
        css={{
          padding: '8px 12px',
          marginRight: 4,
          cursor: currentPage > 1 ? "pointer" : 'not-allowed',
          opacity: currentPage > 1 ? 1 : 0.75,
        }}
        onClick={() => {
          if (currentPage > 1) onClick(currentPage - 1);
        }}
      />
      {pagination?.map((el, idx) => {
      const isActive = currentPage === el
        return (
          <div
            key={idx.toString()}
            css={{
              padding: '8px 12px',
              borderRadius: 4,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              ...isActive && {
                backgroundColor: AppColors.green500,
              },
              cursor: el !== "..." ? 'pointer' : 'not-allowed',
            }}
            onClick={() => {
              if (el !== "...") onClick(el);
            }}
          >
            <span css={{color: isActive? AppColors.gray100 : AppColors.green500, fontWeight: 'bold'}}>{el}</span>
          </div>
        );
      })}
      <FontAwesomeIcon
        icon={solid('chevron-right')}
        color={currentPage < 1000 ? AppColors.green500 : AppColors.gray300}
        size='1x'
        css={{
          padding: '8px 12px',
          marginRight: 4,
          cursor: currentPage < 1000 ? "pointer" : 'not-allowed',
          opacity: currentPage < 1000 ? 1 : 0.75,
        }}
        onClick={() => {
          if (currentPage < 1000) onClick(currentPage + 1);
        }}
      />
    </div>
  );
};

export default Pagination;