import { createSlice } from '@reduxjs/toolkit';
import { SOURCEDATA } from "../constants/SourceData"
import { PERSONALIZED_DATA } from "../constants/Constants"


let initialState = {};

if (localStorage.getItem(PERSONALIZED_DATA) !== null) { 
  const PersonalizedData = JSON.parse(localStorage.getItem(PERSONALIZED_DATA));

  initialState = {
    selectedSection: PersonalizedData.selectedSection?? null,
    selectedSource: PersonalizedData.selectedSource?? SOURCEDATA,
    startDate: PersonalizedData.startDate?? null,
    endDate: PersonalizedData.endDate?? null
  };
}
else {
  initialState = {
    selectedSection: null,
    selectedSource: SOURCEDATA,
    startDate: null,
    endDate: null
  };
}

const NewsFiltersSlice = createSlice({
  name: 'newsFilters',
  initialState,
  reducers: {
    setNewsFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setNewsFilters } = NewsFiltersSlice.actions;
export default NewsFiltersSlice.reducer;