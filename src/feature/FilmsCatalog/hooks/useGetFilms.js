import { useState, useEffect } from "react";
import { getFilms } from "../../../entities";

export const useGetFilms = () => {
  const [searchData, setSearchData] = useState('');
  const [page, setPage] = useState(1);

  const [list, setList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getFilms({ searchData, page })
        .then((data) => setList(data))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
  }, [searchData, page]);

  const handleSearchChange = (string) => setSearchData(string);

  const handlePageChange = (pageNumber) => setPage(pageNumber);

  return { searchData, page, list, isLoading, isError, handleSearchChange, handlePageChange };
}