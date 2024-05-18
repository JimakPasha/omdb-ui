import { Pagination } from "../../shared/ui";
import { useGetFilms } from "./hooks";
import { Header, List } from "./ui";

export const FilmsCatalog = () => {
  const { searchData, page, list, isLoading, isError, handleSearchChange, handlePageChange } = useGetFilms();

  return (
    <div>
      <Header />
      <Pagination />
      <List />
    </div>
  );
};