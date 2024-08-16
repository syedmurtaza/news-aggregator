import React from 'react';
import DatePicker from "react-datepicker";

const CustomDatePicker = ({ selected, onChange, name, label }) => (
    <>
        <div className="col-sm-12 col-md-2"><label>{label}</label></div>
        <div className="col-sm-12 col-md-4">
            <DatePicker
                selected={selected}
                onChange={onChange}
                name={name}
            />
        </div>
    </>
);

export default CustomDatePicker;