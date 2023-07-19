/** @jsxImportSource @emotion/react */

import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import AppColors from "../../styles/AppColors";
import {
  paginationContainer,
  chevronLeft,
  chevronRight,
  PaginationItem,
} from "./Pagination.styles";

interface PaginationProps {
  pagination: (number | string)[];
  currentPage: number;
  onClick: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ pagination, currentPage, onClick }) => {
  const handlePageClick = (page: number) => {
    if (typeof page === "number" && currentPage !== page) {
      onClick(page);
    }
  };

  const renderPageItem = (el: number | string, idx: number) => {
    const isActive = currentPage === el;
    const handleClick = () => {
      if (typeof el === "number") {
        return handlePageClick(el);
      }
    };

    return (
      <PaginationItem
        key={idx.toString()}
        item={el}
        isActive={isActive}
        onClick={handleClick}
        role="button"
      >
        <span css={{ color: isActive ? AppColors.gray100 : AppColors.green500, fontWeight: "bold" }}>
          {el}
        </span>
      </PaginationItem>
    );
  };

  return (
    <div css={paginationContainer}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        color={currentPage > 1 ? AppColors.green500 : AppColors.gray300}
        size="1x"
        css={chevronLeft(currentPage)}
        onClick={() => {
          if (currentPage > 1) onClick(currentPage - 1);
        }}
        data-testid="chevron-left"
      />
      {pagination?.map(renderPageItem)}
      <FontAwesomeIcon
        icon={faChevronRight}
        color={currentPage < 1000 ? AppColors.green500 : AppColors.gray300}
        size="1x"
        css={chevronRight(currentPage)}
        onClick={() => {
          if (currentPage < 1000) onClick(currentPage + 1);
        }}
        data-testid="chevron-right"
      />
    </div>
  );
};

export default Pagination;
