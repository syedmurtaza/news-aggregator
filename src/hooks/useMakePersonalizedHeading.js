import { useState, useEffect } from 'react';
import { useInitialFilterState } from './useInitialFilterState';

export const useMakePersonalizedHeading = () => {
  const [showPersonalizedText, setShowPersonalizedText] = useState(null);

  const [getPersonalizedData, setPersonalizedData] = useInitialFilterState();
  const initialState = getPersonalizedData();

  useEffect(() => {
    let ps = '';

    if (initialState) {
      try {

        if (initialState.selectedSource) {
          let sources = initialState.selectedSource.map(source => source.label);
          ps += `<strong>Personalized Sources</strong> = ${sources.toString()}<br>\n`;
        }

        if (initialState.selectedSection) {
          ps += `<strong>Personalized Section</strong> = ${initialState.selectedSection.label}<br>\n`;
        }

        if (initialState.startDate) {
          ps += `<strong>Personalized Date= </strong>&nbsp;<strong>From:</strong>  ${initialState.startDate}`;
        }


        if (initialState.endDate) {
          ps += `&nbsp;<strong>To:</strong> ${initialState.endDate}<br>\n`;
        }

        setShowPersonalizedText(ps);
      } catch (error) {
        setShowPersonalizedText(ps);
        console.error('Error parsing stored filter data:', error);
      }
    } else {
      setShowPersonalizedText(ps);

    }
  }, [initialState]);

  return showPersonalizedText;
};