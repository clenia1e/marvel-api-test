import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({ length, pageLimit, dataLimit, onPageChange }) => {
  const pages = Math.round(length / dataLimit);
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
    onPageChange((page) => page + 1);
  };

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
    onPageChange((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div className="pagination">
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? "disabled" : ""}`}
      >
        prev
      </button>

      {getPaginationGroup().map((item, index) => {
        if (item > pages) {
          return null;
        }
        return (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        );
      })}

      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? "disabled" : ""}`}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
