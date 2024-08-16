import { useState, useEffect } from 'react';
import { usePersonalizedState } from './usePersonalizedState';

export const useMakePersonalizedHeading = () => {
  const [showPersonalizedText, setShowPersonalizedText] = useState(null);

  const [getPersonalizedData] = usePersonalizedState();
  const PersonalizedState = getPersonalizedData();

  useEffect(() => {
    let ps = '';

    if (PersonalizedState) {
      try {

        if (PersonalizedState.selectedSource) {
          let sources = PersonalizedState.selectedSource.map(source => source.label);
          ps += `<strong>Personalized Sources</strong> = ${sources.toString()}<br>\n`;
        }

        if (PersonalizedState.selectedSection) {
          ps += `<strong>Personalized Section</strong> = ${PersonalizedState.selectedSection.label}<br>\n`;
        }

        if (PersonalizedState.startDate) {
          ps += `<strong>Personalized Date= </strong>&nbsp;<strong>From:</strong>  ${PersonalizedState.startDate}`;
        }


        if (PersonalizedState.endDate) {
          ps += `&nbsp;<strong>To:</strong> ${PersonalizedState.endDate}<br>\n`;
        }

        setShowPersonalizedText(ps);
      } catch (error) {
        setShowPersonalizedText(ps);
        console.error('Error parsing stored filter data:', error);
      }
    } else {
      setShowPersonalizedText(ps);

    }
  }, [PersonalizedState]);

  return showPersonalizedText;
};