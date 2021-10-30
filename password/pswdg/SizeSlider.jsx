import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function SizeSlider(props) {
  const handleSliderChange = (event, newValue) => {
    props.setValue(newValue);
  };

  const handleInputChange = (event) => {
    props.setValue(event.target.value === '' ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      props.setValue(0);
    } else if (value > 15) {
      props.setValue(15);
    }
  };

  return (
    <Box sx={{ width: 200 }}>
      <Typography id="password-length" gutterBottom>
        Password Length
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            max={15}
            value={typeof props.value === 'number' ? props.value : 0}
            onChange={handleSliderChange}
            aria-labelledby="password-length"
          />
        </Grid>
        <Grid item>
          <Input
            value={props.value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 15,
              type: 'number',
              'aria-labelledby': 'password-length',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
