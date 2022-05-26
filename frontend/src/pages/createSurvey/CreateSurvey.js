import { Button, Grid } from '@mui/material';
import React from 'react';
import CreateDia from '../../components/createDialogue/CreateDia';
import TopBar from '../../components/TopBar';
import "./createSurvey.css"


function CreateSurvey(props) {
    const [open, setOpen] = React.useState(false);

    const openDialogue=()=>{
        setOpen(true);
    }

   function closeDialogue(){
        setOpen(false);
    }

    return (
        <div>
            <TopBar/>
            <Grid container >
                <Grid md={3} sm={12} p={0} sx={{borderRight:1, borderColor:"grey"}}>
                    
                      
                   
                
                
                {/* <ul>
                    <li>
                        create from Scratch
                    </li>
                    
                    <li>
                        copy a past survey
                    </li>
                </ul> */}
                <div style={{padding:"20px"}}>
                    <h2 style={{textAlign:"center", marginBottom:"70px",marginTop:"5px"}} >Create a New Survey </h2>
                    <Button  sx={{ m: 1 ,width:"90%",height:"70px",background:"white",color:"black" ,border:"0.5px solid pink" , boxShadow:"0 5px 12px 0 rgb(32 38 42 / 30%)"}}  onClick={openDialogue}>Start from Scratch</Button>
                    <Button  sx={{ m: 1 ,width:'90%', height:"70px" ,background:"white",color:"black" ,border:"0.5px solid pink" , boxShadow:"0 5px 12px 0 rgb(32 38 42 / 30%)" }} >Copy a past survey</Button>
                </div>
                
                
                </Grid >
                <Grid container p={0} md={9} sm={12} sx={{borderBottom:1, borderColor:"grey"}}>
                    <Grid md={12} sm={12} p={1} ml={0} sx={{borderBottom:1, borderColor:"grey"}} >
                        <h2 style={{marginLeft:"20px"}} >Copy a Past Survey</h2>
                    </Grid>
                    <Grid md={12} sm={12} p={1}>
                        <h2>Recents</h2>
                    </Grid>
                <h1>Monkey ni pasand mainu... </h1>
                </Grid>
            </Grid>


            <CreateDia open={open} closeFun={closeDialogue}/>
            
        </div>
    );
}

export default CreateSurvey;