import { useState, useEffect } from 'react';
import { PERSONALIZED_DATA } from '../constants/Constants';

export const useInitialFilterState = () => {
  const [initialState, setInitialState] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem(PERSONALIZED_DATA);
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setInitialState(parsedData);
      } catch (error) {
        setInitialState(null);
        console.error('Error parsing stored filter data:', error);
      }
    }
  }, []);

  return initialState;
};