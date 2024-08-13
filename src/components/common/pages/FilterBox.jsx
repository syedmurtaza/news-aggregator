import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNewsFilters } from '../../../slices/NewsFiltersSlice';


import FilterForm from '../forms/Filter';

import './Styles.css';

const FilterBox = () => {
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const HandleSubmittedSearch = (formData) => {
        console.log(formData);
        setLoading(true);
        dispatch(setNewsFilters(formData));
        setLoading(false);

      };

    return (
        <section className='min-vh-50 h-75 m-5'>
             <FilterForm onSubmit={HandleSubmittedSearch} loading={loading} />

        </section>
    );
};

export default FilterBox;