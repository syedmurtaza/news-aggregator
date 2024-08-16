import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNewsFilters } from '../../../slices/NewsFiltersSlice';

import FilterForm from '../forms/Filter';

import './Styles.css';

const FilterBox = () => {
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const HandleSubmittedSearch = (formData) => {
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