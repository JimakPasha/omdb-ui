import { useEffect, useState } from 'react';
import { useDebounce } from '../../../../shared/hooks';
import './Header.css';

export const Header = ({ onSearchChange, searchData }) => {
  const [searchValue, setSearchValue] = useState(searchData);

  const debouncedSearchTerm = useDebounce(searchValue, 500);

  
  useEffect(() => {
    onSearchChange(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearchChange]);

  const handleInputChange = (event) => setSearchValue(event.target.value);

  return (
    <header className="header">
      <div className='header__content'> 
        <h1 className="header__logo">Movie Catalog</h1>
        <input
          className="header__search"
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleInputChange}
        />
        <div className="header__user">
          Chuck Norris
        </div>
      </div>
    </header>
  )
}