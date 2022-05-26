import React, { useEffect } from 'react';
import {useState} from 'react'

import McqChoice from '../mcqChoice/McqChoice'

function Mcq(props) {

    const[mcqChoices,setMcqChoices]=useState({1:""});
    
    let[count,setCount]=useState(1);
    let optionArray=[];

    useEffect(()=>{

        // console.log(mcqChoices);
        // console.log(count);
        Object.keys(mcqChoices).map(k=>{
            return optionArray.push(mcqChoices[k]);
        })
        props.addOption(optionArray);

    })

    function editMcq(e){
        
        const key=e.target.name;

        setMcqChoices({...mcqChoices, [key]: e.target.value })
    }

    function addEmpty(){
        // console.log("clicked add empty")
        const newCount=count+1;
        setCount(newCount);
        setMcqChoices({...mcqChoices,[newCount]:""});
    }

    function deleteMcq(name){
        // console.log(`${name} delete this`)
        let newChoices={...mcqChoices};
        delete newChoices[name]
        setMcqChoices(newChoices);
    }

    return (    
        <div >

            {Object.keys(mcqChoices).map(k=>{
                return <McqChoice name={k} editMcq={editMcq} increaseCount={addEmpty} deleteMcq={deleteMcq} content={mcqChoices[k]}/> 
            })}
           




            
            
        </div>
    );
}

export default Mcq;