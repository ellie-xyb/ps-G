import React, {  useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import {Box, Stack} from '@mui/material';
import SizeSlider from './SizeSlider';
import RulesCheckBox from './RulesCheckBox';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LoopIcon from '@mui/icons-material/Loop';
import CheckIcon from '@mui/icons-material/Check';

export default function PsGBox() {

  // handel password length
  const [value, setValue] = useState("");
  const [length, setLength] = useState(10);

  // handel password other options
  const [uppercase, setUppercase] = React.useState(false);
  const [lowercase, setLowercase] = React.useState(true);
  const [numbers, setNumbers] = React.useState(true);
  const [symbols, setSymbols] = React.useState(true);

  let otherOptions = {
    'uppercase': uppercase,
    'lowercase': lowercase,
    'numbers': numbers,
    'symbols': symbols,
 }

 function sendOptions(){
  fetch('/password/options', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      length: length,
      uppercase: uppercase,
      lowercase: lowercase,
      numbers: numbers,
      symbols: symbols,
    })
  })
  .then(response => response.json())
  .then(data => setValue(data['password'])) 
 }

  // check option change
  useEffect(() => {
    sendOptions()
  }, [length, uppercase, lowercase, numbers, symbols])

  function refreshPage(){
    sendOptions()
  }

  // handel copy action
  const [copied, setCopied] = useState(false);
  function copyToClipBoard(){
    navigator.clipboard.writeText(value)
    setCopied(true);
    setTimeout(() => {  setCopied(false);; }, 800);
  };

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
              value={ value }
            />
            <IconButton sx={{ p: '10px' }} aria-label="copy" onClick={ copyToClipBoard }>
              {copied ? <CheckIcon sx={{color: "#ff1500"}} /> : <ContentCopyIcon />}
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '12px' }} aria-label="generate new one" onClick={ refreshPage } >
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
            <RulesCheckBox otherOptions={otherOptions} uppercase={uppercase} setUppercase={setUppercase} lowercase={lowercase} setLowercase={setLowercase} numbers={numbers} setNumbers={setNumbers} symbols={symbols} setSymbols={setSymbols} />
          </Box>
        </Box>
    </Box>
  );
}

ReactDOM.render(<PsGBox />, document.querySelector('#psg-box'));