import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { SECTIONDATA } from "../../../constants/SectionData"
import { SOURCEDATA } from "../../../constants/SourceData"
import { PERSONALIZED_DATA } from '../../../constants/Constants';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';



const FilterForm = ({ onSubmit, loading }) => {
    const currentDate = moment(new Date()).format("YYYY-MM-DD");
    let PersonalizedData = {};
    
    if (localStorage.getItem(PERSONALIZED_DATA) !== null) { 
         PersonalizedData = JSON.parse(localStorage.getItem(PERSONALIZED_DATA));
      
        // initialState = {
        //   selectedSection: PersonalizedData.selectedSection,
        //   selectedSource: PersonalizedData.selectedSource,
        //   startDate: PersonalizedData.startDate,
        //   endDate: PersonalizedData.endDate
        // };

    }

    const [selectedSection, setSelectedSection] = useState(null);
    const [selectedSource, setSelectedSource] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

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
            ...(selectedSource !== null ? { selectedSource }: {'selectedSource': SOURCEDATA}),
            ...(startDate !== null && { startDate }),
            ...(endDate !== null && { endDate })
        }

        localStorage.setItem(PERSONALIZED_DATA, JSON.stringify(PersonalizedData));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(startDate){
            if(startDate > currentDate){
                alert("The Start date can never be greater than the current date.");
                return false;
            }
        }    

        if(startDate && endDate){
           //validate the end Date should be greater than or eQual to start date
 
            if (endDate < startDate){
                alert("The End date should be greater than or equal to the start date.");
                return false;
            }
        }

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
                            /></div>


                        <div className="col-sm-12 col-md-6">
                            <Select
                                value={selectedSection}
                                onChange={handleSectionChange}
                                options={SECTIONDATA}
                                placeholder="Select Section"
                                name='section'
                            /></div>

                    </div>
                    <div className='row mt-2'>
                        <div className="col-sm-12 col-md-2"><label>From Date</label></div>
                        <div className="col-sm-12 col-md-4">
                            <DatePicker
                                selected={startDate}
                                //onSelect={handleStartDateSelect}
                                onChange={handleStartDateSelect}
                                name='from-date'
                            />
                        </div>
                        <div className="col-sm-12 col-md-2"><label>To Date</label></div>
                        <div className="col-sm-12 col-md-4">
                            <DatePicker
                                selected={endDate}
                                //onSelect={handleEndDateSelect}
                                onChange={handleEndDateSelect}
                                name='to-date'
                            />
                        </div>
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
                    </button></div>
            </div>
        </form>

    );
};

export default FilterForm;