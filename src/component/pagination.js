import React from 'react';

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={i === currentPage ? 'active' : ''}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== currentPage) {
      if (pageNumber > currentPage) {
        onNextPage();
      } else {
        onPrevPage();
      }
    }
  };

  return (
    <div className="pagination">
      <button onClick={onPrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      {renderPageNumbers()}
      <button onClick={onNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
