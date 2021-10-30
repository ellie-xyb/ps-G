import React, { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function RulesCheckBox(props) {

    const handleUppercase = (event) => {
        props.otherOptions.uppercase = event.target.checked;
        props.setUppercase(event.target.checked)
    };

    const handleLowercase = (event) => {
        props.otherOptions.lowercase = event.target.checked;
        props.setLowercase(event.target.checked)
    };  

    const handleNumbers = (event) => {
        props.otherOptions.numbers = event.target.checked;
        props.setNumbers(event.target.checked)
    };  

    const handleSymbols = (event) => {
        props.otherOptions.symbols = event.target.checked;
        props.setSymbols(event.target.checked)
    };  

    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleUppercase} checked={props.uppercase} />} label="Uppercase" />
            <FormControlLabel control={<Checkbox onChange={handleLowercase} checked={props.lowercase} />} label="Lowercase" />
            <FormControlLabel control={<Checkbox onChange={handleNumbers} checked={props.numbers} />} label="Numbers" />
            <FormControlLabel control={<Checkbox onChange={handleSymbols} checked={props.symbols} />} label="Symbols" />
        </FormGroup>
    );
}