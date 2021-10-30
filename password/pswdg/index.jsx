import React, {  useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Box, Stack} from '@mui/material';
import SizeSlider from './SizeSlider';
import RulesCheckBox from './RulesCheckBox';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LoopIcon from '@mui/icons-material/Loop';

export default function PsGBox() {
  // useEffect(() => {
  //   fetch("/password/generated-password")
  //   .then(res => res.text())
  //   .then(
  //     (result) => {
  //       console.log(result)
  //       setValue(result);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   )
  // }, [])
  const [value, setValue] = useState("");
  const [length, setLength] = useState(10);
  useEffect(() => {
    fetch('/password/options', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        length: length,
         

      })
    })
    .then(response => response.json())
    .then(data => setValue(data['password']))
  }, [length])

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
          }}>
          <Box
            component="form"
            sx={{ p: '25px 12px', display: 'flex', alignItems: 'center', width: 580 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              inputProps={{ 'aria-label': 'generated password'}}
              autoFocus="true"
              value = { value }
            />
            <IconButton sx={{ p: '10px' }} aria-label="copy">
              <ContentCopyIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '12px' }} aria-label="generate new one">
              <LoopIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            width: 600,
            height: 330,
            backgroundColor: '#FCFCFC',
            borderRadius: 3,
            border: '1px dashed grey',
            margin: '10px auto',
          }}
        >
          <Stack sx={{textAlign: 'center', my: 3,fontSize: 20}}>Customize your password</Stack>
          <Divider sx={{ width: 480, margin: '10px auto', }}  />
          <Box sx={{ p: '25px 12px', display: 'flex', alignItems: 'start', justifyContent: 'space-around', width: 580 }}>
            <SizeSlider value={length} setValue={setLength}/>
            <RulesCheckBox />
          </Box>
        </Box>
    </Box>
  );
}

ReactDOM.render(<PsGBox />, document.querySelector('#psg-box'));