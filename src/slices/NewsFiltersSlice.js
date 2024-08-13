import { createSlice } from '@reduxjs/toolkit';
import {SOURCEDATA} from "../constants/SourceData"

const initialState = {
  selectedSection: null,
  selectedSource: SOURCEDATA,
  startDate: new Date(),
  endDate: new Date(),
  size: '10',
};

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