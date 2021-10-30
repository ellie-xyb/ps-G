import React, { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function RulesCheckBox() {
    const [uppercase, setUppercase] = React.useState(false);
    const [lowercase, setLowercase] = React.useState(false);
    const [numbers, setNumbers] = React.useState(false);
    const [symbols, setSymbols] = React.useState(false);

    let otherOptions = {}

    const handleUppercase = (event) => {
        setUppercase(event.target.checked);
        otherOptions['uppercase'] = event.target.checked;
        console.log(otherOptions);
    };

    const handleLowercase = (event) => {
        setLowercase(event.target.checked);
        otherOptions['lowercase'] = event.target.checked;
        console.log(otherOptions);
    };  

    const handleNumbers = (event) => {
        setNumbers(event.target.checked);
        otherOptions['numbers'] = event.target.checked;
        console.log(otherOptions);
    };  

    const handleSymbols = (event) => {
        setSymbols(event.target.checked);
        otherOptions['symbols'] = event.target.checked;
        console.log(otherOptions);
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