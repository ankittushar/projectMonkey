import React, { useEffect } from 'react';
import { useState } from 'react';
import { FormControl, Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { MenuItem , Select} from '@mui/material';
import Mcq from '../mcq/Mcq';

function AddQuestion(props) {
    const [type,setType]=useState('');
    const [question,setQuestion]=useState('');

    let options=[];

    const addOption=(newOptions)=>{
        options=newOptions;
    }

    useEffect(()=>{
        console.log(options);
    })

        

    function handleChange(e){
        setType(e.target.value);
    }

    function choiceHandler(){
        switch(type){
            case 'mcq':
                return <Mcq addOption={addOption}/>
            case 'text':
                return <h2>text</h2>
            default:
                return 
        }
    }

    return (
        <div style={{background:"#f4f5f5", border:"solid black 0.5px"}} >
            <Grid container p={2} sx={{background:"#f4f5f5", border:"solid black 0.5px"}}>
                <Grid sm={0.5} sx={{padding:"20px 1px 0px 30px"}}>
                    q1
                </Grid>
                <Grid sm={6.5} >
                   
                <FormControl fullWidth  >
                    
                    <TextField 
                        required
                        id="outlined"
                        placeholder='Enter your Question' 
                        variant='outlined'
                        value={question}
                        onChange={(e)=>setQuestion(e.target.value)}
                    
                       
                    />
        

            </FormControl>
                </Grid>
                <Grid sm={5} fullwidth>
                    <FormControl fullWidth >
                        
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={type}
                        onChange={handleChange}

                        >
                            <MenuItem value="mcq">Multiple Choice</MenuItem>
                            <MenuItem value="checkbox">Checkbox</MenuItem>
                            <MenuItem value="text">Textbox</MenuItem>
                            <MenuItem value="date">Date</MenuItem>
                            
                    
            
                        </Select>
            
                    </FormControl>
                </Grid>
            
            </Grid>
            <div>
                { 
                   choiceHandler() 
                }
            </div>
        </div>
    );
}

export default AddQuestion;