import React, { useState } from 'react';
import Select from 'react-select';
import { SECTIONDATA } from "../../../constants/SectionData"
import { SOURCEDATA } from "../../../constants/SourceData"
import { useInitialFilterState } from '../../..//hooks/useInitialFilterState';
import CustomDatePicker from '../../common/CustomDatePicker';


import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

const FilterForm = ({ onSubmit, loading }) => {
    const [getPersonalizedData, setPersonalizedData] = useInitialFilterState();

    const PersonalizedData = getPersonalizedData();

    const [selectedSection, setSelectedSection] = useState(PersonalizedData.selectedSection || null);
    const [selectedSource, setSelectedSource] = useState(PersonalizedData.selectedSource || null);
    const [startDate, setStartDate] = useState(PersonalizedData.startDate || null);
    const [endDate, setEndDate] = useState(PersonalizedData.endDate || null);

    const handleSectionChange = (option) => {
        setSelectedSection(option);
    };

    const handleSourceChange = (option) => {
        setSelectedSource(option);
    };

    const handleStartDateSelect = (sDate) => {
        sDate = moment(sDate).format("YYYY-MM-DD");
        setStartDate(sDate);
    };

    const handleEndDateSelect = (eDate) => {
        eDate = moment(eDate).format("YYYY-MM-DD");
        setEndDate(eDate);
    };

    const handlePersonalized = () => {
        let PersonalizedData = {
            ...(selectedSection !== null && { selectedSection }),
            ...(selectedSource !== null && { selectedSource }),
            ...(startDate !== null && { startDate }),
            ...(endDate !== null && { endDate })
        }
        setPersonalizedData(PersonalizedData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
            ...(selectedSection !== null && { selectedSection }),
            ...(selectedSource !== null && { selectedSource }),
            ...(startDate !== null && { startDate }),
            ...(endDate !== null && { endDate })
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="card">
                <div className="card-header"><h4>Filter News Feed</h4></div>
                <div className="card-body">
                    <div className='row'>
                        <div className="col-sm-12 col-md-6">
                            <Select
                                isMulti
                                value={selectedSource}
                                onChange={handleSourceChange}
                                options={SOURCEDATA}
                                placeholder="Select Source"
                                name='newsSource'
                            />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <Select
                                value={selectedSection}
                                onChange={handleSectionChange}
                                options={SECTIONDATA}
                                placeholder="Select Section"
                                name='section'
                            />
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <CustomDatePicker
                            selected={startDate}
                            onChange={handleStartDateSelect}
                            name='from-date'
                            label="From Date"
                        />
                        <CustomDatePicker
                            selected={endDate}
                            onChange={handleEndDateSelect}
                            name='to-date'
                            label="To Date"
                        />
                    </div>
                </div>
                <div className="card-footer text-end">
                    <button type="button" onClick={handlePersonalized} className="btn btn-danger btn-block" title='Personalized'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                        </svg>
                    </button>
                    &nbsp;
                    <button type="submit" className="btn btn-primary btn-block" disabled={loading} title='Filter News'>
                        {loading ? "Filtering News" : "Filter News"}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FilterForm;