import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Stepper.scss';

const Step1 = () => {
  return (
    <div className='step-container'>
        <div className="title">
            <h1>Create Your Game Now</h1>
        </div>
        <div className="step-container-2">
            <TextField id="outlined-basic" label="Enter App Name" variant="outlined" />
        </div>
    </div>
  )
}

export default Step1