import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { SECTIONDATA } from "../../../constants/SectionData"
import { SOURCEDATA } from "../../../constants/SourceData"
import { NUMBERSDATA } from "../../../constants/NumbersData"
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';


const FilterForm = ({ onSubmit, loading }) => {
    const currentDate = moment(new Date()).format("YYYY-MM-DD");
    const [selectedSection, setSelectedSection] = useState(null);
    const [selectedSource, setSelectedSource] = useState(null);
    const [startDate, setStartDate] = useState(currentDate);
    const [endDate, setEndDate] = useState(currentDate);
    const [size, setSize] = useState('10');

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

    const handleSizeChange = (size) => {
        setSize(size);
        console.log(`Size selected:`, size);
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit({
            ...(selectedSection !== null && { selectedSection }), // Include selectedSection only if it's not null
            ...(selectedSource !== null && { selectedSource }), // Include selectedSource only if it's not null
            startDate,
            endDate,
            size
        });
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className="card">
                <div className="card-header"><h4>Filter News Feed</h4></div>
                <div className="card-body">
                    <div className='row'>
                        <div className="col-sm-12 col-md-5">
                            <Select
                                isMulti
                                value={selectedSource}
                                onChange={handleSourceChange}
                                options={SOURCEDATA}
                                placeholder="Select Source"
                                name='newsSource'
                            /></div>


                        <div className="col-sm-12 col-md-5">
                            <Select
                                value={selectedSection}
                                onChange={handleSectionChange}
                                options={SECTIONDATA}
                                placeholder="Select Section"
                                name='section'
                            /></div>
                        <div className="col-sm-12 col-md-2">
                            <Select
                                value={size}
                                onChange={handleSizeChange}
                                options={NUMBERSDATA}
                                placeholder="Select Size"
                                name='newsSize'
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
                <div className="card-footer text-end"> <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                    {loading ? "Filtering News" : "Filter News"}
                </button></div>
            </div>
        </form>

    );
};

export default FilterForm;