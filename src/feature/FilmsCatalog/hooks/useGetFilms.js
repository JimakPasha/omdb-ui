import { useState, useEffect } from "react";
import { getFilms } from "../../../entities";

export const useGetFilms = () => {
  const [searchData, setSearchData] = useState('Batman');
  const [page, setPage] = useState(1);

  const [list, setList] = useState([]);
  const [totalResults, setTotalResults] = useState('0');
  const [isServerError, setIsServerError] = useState(false);
  const [clientErrorMessage, setClientErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsServerError(false);
    setClientErrorMessage('');

    getFilms({ searchData, page })
        .then((data) => {
          if (data.Response === 'True') {
            setList(data.Search);
            setTotalResults(data.totalResults);
          } else {
            setClientErrorMessage(data.Error);
          }
        })
        .catch(() => setIsServerError(true))
        .finally(() => setIsLoading(false));
  }, [searchData, page]);

  const handleSearchChange = (string) => setSearchData(string);

  const handlePageClick = (pageNumber) => setPage(pageNumber);

  const handleNextClick = () => setPage(page + 1);
  
  const handlePrevClick = () => setPage(page - 1);

  return { searchData, totalResults, page, list, isLoading, isServerError, clientErrorMessage, handleSearchChange, handlePageClick, handleNextClick, handlePrevClick };
}