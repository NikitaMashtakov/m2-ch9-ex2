import { useState, useEffect } from 'react';

function useDebouncedValue(func, delay) {
  useEffect(() => {
    const handler = setTimeout(() => {
      func();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [func, delay]);

  return func();
}

export default useDebouncedValue;
