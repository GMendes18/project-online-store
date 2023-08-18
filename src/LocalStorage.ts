import React, { useContext, useEffect, useState } from 'react';
import { ProductProps } from './types';

export function useLocalStorage(key:string, initialState: ProductProps[]) {
  const [state, setState] = useState(() => {
    const storage = localStorage.getItem(key);

    if (storage) return JSON.parse(storage) || [];
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state || []));
  }, [key, state]);

  return [state, setState];
}
