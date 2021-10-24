import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function RulesCheckBox() {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Uppercase" />
            <FormControlLabel control={<Checkbox />} label="Lowercase" />
            <FormControlLabel control={<Checkbox />} label="Numbers" />
            <FormControlLabel control={<Checkbox />} label="Symbols" />
        </FormGroup>
    );
}