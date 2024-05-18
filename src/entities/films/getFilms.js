import { api } from "../../shared/api";

export const getFilms = async ({ searchData, page }) => {
  const params = {
    s: searchData,
    page,
  };

  const { data } = await api.get('', { params });

  return data;
}
