import React, { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function RulesCheckBox() {
    const [uppercase, setUppercase] = React.useState(false);
    const [lowercase, setLowercase] = React.useState(false);
    const [numbers, setNumbers] = React.useState(false);
    const [symbols, setSymbols] = React.useState(false);

    let otherOptions = {
        'uppercase': uppercase,
        'lowercase': lowercase,
        'numbers': numbers,
        'symbols': symbols,
     }

    const handleUppercase = (event) => {
        otherOptions.uppercase = event.target.checked;
        console.log(otherOptions);
    };

    const handleLowercase = (event) => {
        otherOptions['lowercase'] = event.target.checked;
        console.log(otherOptions);
    };  

    const handleNumbers = (event) => {
        otherOptions['numbers'] = event.target.checked;
        console.log(otherOptions);
    };  

    const handleSymbols = (event) => {
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