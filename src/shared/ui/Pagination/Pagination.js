import { LIMIT_POSTS } from "../../constants";
import './Pagination.css';

export const Pagination = ({ page, countElement, handleNextClick, handlePageClick, handlePrevClick }) => {

  const totalPages = Math.ceil(countElement / LIMIT_POSTS);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
  }

  const visiblePages = pageNumbers.filter((pageNumber) => (
      pageNumber === 1 ||
      pageNumber === page ||
      pageNumber === totalPages ||
      Math.abs(pageNumber - page) <= 2
  ));

  const visiblePagesWithDots = [];

  visiblePages.forEach((num, i, arr) => {
      if (num + 1 !== arr[i + 1] && i !== arr.length - 1) {
          visiblePagesWithDots.push(num);
          visiblePagesWithDots.push('...');
      } else {
          visiblePagesWithDots.push(num);
      }
  })


  const prevDisabled = page === 1;
  const nextDisabled = page === totalPages;


  return (
    <>
      {totalPages > 1 && (
        <nav className='pagination'>
          <button className='pagination__btn' onClick={handlePrevClick} disabled={prevDisabled}>
              prev
          </button>

          <div className='pagination__items'>
              {visiblePagesWithDots.map((pageNumber) => {
                  if (typeof pageNumber === 'string') {
                      return <div>...</div>
                  } else {
                      return (
                          <button 
                              className={`pagination__btn ${pageNumber === page ? 'active' : ''}`}
                              key={pageNumber}
                              onClick={() => handlePageClick(pageNumber)}
                          >
                              {pageNumber}
                          </button>
                      )
                  }
                
              })}
          </div>

          <button className='pagination__btn' onClick={handleNextClick} disabled={nextDisabled}>
              next
          </button>
        </nav>
      )
    }
    </>
  );
};