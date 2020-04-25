import React, { useState } from "react";
import "./Pagination.css";

type PropsType = {
  totalCount: number;
  pageSize: number;
  portionSize?: number;
  currentPage: number;
  onChangePage: (pageNumber: number) => void;
};

export const Pagination: React.FC<PropsType> = ({ totalCount, pageSize, portionSize = 10, onChangePage, currentPage }) => {
  const pages = [];
  let pagesCount = Math.ceil(totalCount / pageSize);

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setportionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className="pagination__list">
      {portionNumber > 1 ? (
        <button onClick={() => setportionNumber(portionNumber - 1)} className="pagination__list-swipe-btn-prev">
          prev
        </button>
      ) : (
        <button className="pagination__list-swipe-btn-prev--disable">prev</button>
      )}
      <div className="pagination__list-wrapper">
        {pages
          .filter((el) => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
          .map((el) => (
            <button
              key={el}
              onClick={() => {
                onChangePage(el);
              }}
              className={el === currentPage ? "pagination__item-active" : "pagination__item"}
            >
              {el}
            </button>
          ))}
      </div>
      {portionCount > portionNumber ? (
        <button onClick={() => setportionNumber(portionNumber + 1)} className="pagination__list-swipe-btn-next">
          next
        </button>
      ) : (
        <button className="pagination__list-swipe-btn-next--disable">next</button>
      )}
    </div>
  );
};
