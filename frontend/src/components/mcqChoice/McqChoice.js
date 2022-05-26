import React from 'react';

import { FormControl, Stack, TextField } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton } from '@mui/material';
import { Grid } from '@mui/material';

function McqChoice(props) {


    function deleteThis(){
        props.deleteMcq(props.name);
    }

    return (

       
             <Grid container sx={{padding:"10px 0px 10px 68px"}}>
                <Grid sm={10} >
                    <FormControl fullWidth>
                        <TextField
                            id="outlined-required"
                            placeholder='Enter your Choice'
                            name={props.name}
                            fullWidth
                            onChange={props.editMcq}
                            value={props.content}
                            >

                        </TextField>
                    </FormControl>
                </Grid>
                <Grid sm={2} sx={{alignSelf:"center"}}>
                  <Stack
                    direction="row"
                    spacing={2} 
                    
                    >
                        
                        <IconButton onClick={props.increaseCount} >
                            <AddCircleOutlineIcon/>
                        </IconButton>
                        <IconButton  onClick={deleteThis} >
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                    

                 </Stack>
                </Grid>
            </Grid>
        
    );
}

export default McqChoice;