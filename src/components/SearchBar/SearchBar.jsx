import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export const SearchBar = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const searchHandler = (value) => {
    dispatch({ type: 'SET_SEARCH', payload: value });
    // setSearch(value);
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        name="search"
        value={value}
        placeholder="Поиск..."
        onChange={({ target }) => searchHandler(target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string,
  searchHandler: PropTypes.func,
};
