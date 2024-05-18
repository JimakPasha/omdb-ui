import './SearchResultDescription.css';

export const SearchResultDescription = ({ searchData, totalResults }) => (
  <p class="search-results">
      You searched for: {searchData}, {totalResults} results found
  </p>
);
