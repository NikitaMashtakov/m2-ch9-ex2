import { useState, useEffect } from 'react';

export const debouncedAction = (value, delay) => (dispatch) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  dispatch({ type: 'SET_SEARCH', payload: debouncedValue });
};
