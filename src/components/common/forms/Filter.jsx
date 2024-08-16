import React, { useState } from 'react';
import Select from 'react-select';
import { SECTIONDATA } from "../../../constants/SectionData"
import { SOURCEDATA } from "../../../constants/SourceData"
import { usePersonalizedState } from '../../../hooks/usePersonalizedState';
import CustomDatePicker from '../../common/CustomDatePicker';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { setPersonalizedMsgBox, clearPersonalizedMsgBox } from '../../../slices/PersonalizedSlice';


import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";


const FilterForm = ({ onSubmit, loading }) => {
    const dispatch = useDispatch();

    const [getPersonalizedData, setPersonalizedData] = usePersonalizedState();
    const CurrentDate = moment(new Date()).format("YYYY-MM-DD");

    const PersonalizedData = getPersonalizedData();

    const [selectedSection, setSelectedSection] = useState(PersonalizedData?.selectedSection || null);
    const [selectedSource, setSelectedSource] = useState(PersonalizedData?.selectedSource || null);
    const [startDate, setStartDate] = useState(PersonalizedData?.startDate || '');
    const [endDate, setEndDate] = useState(PersonalizedData?.endDate || '');

    const handleSourceChange = (option) => {
        setSelectedSource(option);
    };

    const handleSectionChange = (option) => {
        setSelectedSection(option);
    };

    const handleStartDateSelect = (sDate) => {
        if (sDate) {
            sDate = moment(sDate).format("YYYY-MM-DD");
            setStartDate(sDate);
        } else {
            setStartDate('');
        }
    };

    const handleEndDateSelect = (eDate) => {
        if (eDate) {
            eDate = moment(eDate).format("YYYY-MM-DD");
            setEndDate(eDate);
        }
        else {
            setEndDate('');
        }
    };

    const FilterdData = {
        ...(selectedSection !== null && { selectedSection }),
        ...(selectedSource !== null && { selectedSource }),
        ...(startDate !== null && { startDate }),
        ...(endDate !== null && { endDate })
    }

    const handlePersonalized = () => {
        setPersonalizedData(FilterdData);
        dispatch(setPersonalizedMsgBox(true));
        toast("News Peronalized !");
    }

    const handleDePersonalized = () => {

        setPersonalizedData({});
        setSelectedSource(null);
        setSelectedSection(null);
        setStartDate('');
        setEndDate('');

        dispatch(clearPersonalizedMsgBox());
        toast("Peronalized News cleared!");
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        //Make sure that Start date must not be a future date:

        if (startDate) {

            if (startDate > CurrentDate) {
                toast("The Start Date can never be greater than the Current Date!");
                return false;
            }
        }

        if (startDate && endDate) {
            if (endDate < startDate) {
                toast("The End Date can never be less than the Start Date!");
                return false;
            }
        }

        onSubmit(FilterdData);
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
                                isClearable
                                isSearchable
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
                    <button type="button" onClick={handleDePersonalized} className="btn btn-secondary btn-block" title='Depersonalized'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-diamond" viewBox="0 0 16 16">
                            <path d="M7.987 16a1.53 1.53 0 0 1-1.07-.448L.45 9.082a1.53 1.53 0 0 1 0-2.165L6.917.45a1.53 1.53 0 0 1 2.166 0l6.469 6.468A1.53 1.53 0 0 1 16 8.013a1.53 1.53 0 0 1-.448 1.07l-6.47 6.469A1.53 1.53 0 0 1 7.988 16zM7.639 1.17 4.766 4.044 8 7.278l3.234-3.234L8.361 1.17a.51.51 0 0 0-.722 0M8.722 8l3.234 3.234 2.873-2.873c.2-.2.2-.523 0-.722l-2.873-2.873zM8 8.722l-3.234 3.234 2.873 2.873c.2.2.523.2.722 0l2.873-2.873zM7.278 8 4.044 4.766 1.17 7.639a.51.51 0 0 0 0 .722l2.874 2.873z" />
                        </svg>
                    </button>
                    &nbsp;
                    <button type="submit" className="btn btn-primary btn-block" disabled={loading} title='Filter News'>
                        {loading ? "Filtering News" : "Filter News"}
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </form>
    );
};

export default FilterForm;