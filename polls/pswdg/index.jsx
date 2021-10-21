import * as React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import { padding } from '@mui/system';
// import ResultBox from './ResultBox'

export default function PsGBox() {
  return (
    <Box
      sx={{
        margin: '100px auto',
        width: 700,
        height: 510,
        border: '1px dashed grey',
        borderRadius: 3,
      }}
    >
        <Box
          sx={{
            width: 600,
            height: 100,
            backgroundColor: '#E2BFBD',
            borderRadius: 3,
            border: '1px dashed grey',
            margin: '25px auto',

          }}
        />
        <Box
          sx={{
            width: 600,
            height: 330,
            backgroundColor: '#FCFCFC',
            borderRadius: 3,
            border: '1px dashed grey',
            margin: '10px auto',
          }}
        />
    </Box>
  );
}

ReactDOM.render(<PsGBox />, document.querySelector('#psg-box'));