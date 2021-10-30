import React, { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function RulesCheckBox(props) {

    const handleUppercase = (event) => {
        props.otherOptions.uppercase = event.target.checked;
        console.log(props.otherOptions);
    };

    const handleLowercase = (event) => {
        props.otherOptions['lowercase'] = event.target.checked;
        console.log(props.otherOptions);

    };  

    const handleNumbers = (event) => {
        props.otherOptions['numbers'] = event.target.checked;
        console.log(props.otherOptions);

    };  

    const handleSymbols = (event) => {
        props.otherOptions['symbols'] = event.target.checked;
        console.log(props.otherOptions);
    };  

    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleUppercase} />} label="Uppercase" />
            <FormControlLabel control={<Checkbox onChange={handleLowercase} />} label="Lowercase" />
            <FormControlLabel control={<Checkbox onChange={handleNumbers} />} label="Numbers" />
            <FormControlLabel control={<Checkbox onChange={handleSymbols}/>} label="Symbols" />
        </FormGroup>
    );
}