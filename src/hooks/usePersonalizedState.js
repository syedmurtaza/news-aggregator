import { PERSONALIZED_DATA } from '../constants/Constants';

export const usePersonalizedState = () => {
  const getPersonalizedData = () => {
    const data = localStorage.getItem(PERSONALIZED_DATA);
    return data ? JSON.parse(data) : {};
  };

  const setPersonalizedData = (data) => {
    localStorage.setItem(PERSONALIZED_DATA, JSON.stringify(data));
  };

  return [getPersonalizedData, setPersonalizedData];
};
