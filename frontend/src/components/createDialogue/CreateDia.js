import React, { useState } from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { FormControl, TextField } from '@mui/material';

import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Button } from '@mui/material';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import { IconButton } from '@mui/material';

const options=["Survey category"
     , "Community or volunteer feedback"
     ,"Brand tracking or awareness"
     ,"General market research"
     , "Employee engagement"
     , "Employee performance"
     , "General employee feedback"
     , "Event registration"
     , "Event feedback"
     , "Academic research"
     , "Course evaluation"
     , "Student or parent feedback"
     ,"Quiz"
     , "Other"
     , "Form or application"
     , "Vote or poll"]

function CreateDia(props) {
    const {  open} = props;
    const [select,setSelect]=useState('');

  const handleClose = () => {
    props.closeFun();
  };

  const handleChange = (event) => {
    setSelect(event.target.value);
  };
 

  return (
    <Dialog  open={open} fullWidth maxWidth="md" >
      <div style={{padding:"20px"}}>
      <DialogTitle fullWidth >Name Your Survey 
      
        <IconButton onClick={handleClose} sx={{float:"right" , padding:'0px', margin:"0px"}}>
            <ClearSharpIcon  sx={{float:"right"}} />
        </IconButton>
      
      </DialogTitle>

           <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
            <TextField 
                required
                id="outlined-required"
                placeholder='Survey Name'  
                fullWidth  
                sx={{paddingBottom:"10px"}}
            />
        

            </FormControl>
    
   

   
      <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={select}
          label="Category"
          onChange={handleChange}
        >
          {options.map(x=>{
                    return <MenuItem value={x}>{x}</MenuItem>
                })}
          
        </Select>
        
      </FormControl>

      <Button variant="contained" sx={{float:"right"}}>Create Survey</Button>
      
    
      </div>
    </Dialog>
  );
}

export default CreateDia;