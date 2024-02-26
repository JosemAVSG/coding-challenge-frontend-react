import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const Pag = ({ resultsPerPage, currentPage, setCurrentPage, totalResults }) => {
  const pagNumber = [];

  const totalPages = Math.ceil(totalResults.length / resultsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pagNumber.push(i);
  }

  const onPrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const onSpecific = (n) => {
    setCurrentPage(n);
  };

  return (
    <Pagination className="justify-content-center mr-3">
      <Pagination.Prev
        className={currentPage === 1 ? "disabled" : ""}
        onClick={onPrevious}
      >
        Prev
      </Pagination.Prev>

      {pagNumber.map((nopage) => (
        <Pagination.Item
          key={nopage}
          onClick={() => onSpecific(nopage)}
          className={nopage === currentPage ? "active" : ""}
        >
          {nopage}
        </Pagination.Item>
      ))}

      <Pagination.Next
        className={currentPage >= pagNumber.length ? "disabled" : ""}
        onClick={onNext}
      >
        Next
      </Pagination.Next>
    </Pagination>
  );
};

export default Pag;
