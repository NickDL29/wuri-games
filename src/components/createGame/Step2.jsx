import React from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const Step2 = () => {
  return (
    <>
    <div className="title">
        
    </div>
    <div className="step-container">
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        CSV for Story
        <input hidden accept="file_extension|audio/*|video/*|image/*|media_type" multiple type="file" />
      </Button>
      <Button variant="contained" component="label">
        Game Assets
        <input hidden accept="file_extension|audio/*|video/*|image/*|media_type" multiple type="file" />
      </Button>
      <Button variant="contained" component="label">
        App Icons
        <input hidden accept="file_extension|audio/*|video/*|image/*|media_type" multiple type="file" />
      </Button>
    </Stack>
    <p>Click Here to Download Sample Files</p>
    </div>
</>
  )
}

export default Step2