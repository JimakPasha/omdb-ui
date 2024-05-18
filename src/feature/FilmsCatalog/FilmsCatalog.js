import { Loader, Pagination, ErrorMessage } from "../../shared/ui";
import { useGetFilms } from "./hooks";
import { Header, List, SearchResultDescription } from "./ui";

import './FilmsCatalog.css';

export const FilmsCatalog = () => {
  const { searchData, totalResults, page, list, isLoading, isServerError, clientErrorMessage, handleSearchChange, handlePageClick, handleNextClick, handlePrevClick } = useGetFilms();

  return (
    <>
      <Header onSearchChange={handleSearchChange} searchData={searchData} />

      <main className="container">
        {isLoading && <Loader />}
        {isServerError && <ErrorMessage />}
        {clientErrorMessage && <ErrorMessage message={clientErrorMessage} />}

        {!isLoading && !isServerError && !clientErrorMessage && (
          <div className="content">
            <SearchResultDescription searchData={searchData} totalResults={totalResults} />
            <List list={list} />
            <Pagination 
              countElement={totalResults}
              page={page}
              handlePageClick={handlePageClick}
              handleNextClick={handleNextClick}
              handlePrevClick={handlePrevClick}
            />
          </div>
        )}

      </main>
    </>
  );
};