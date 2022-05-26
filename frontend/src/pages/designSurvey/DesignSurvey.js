import React from 'react';
import TopBar from '../../components/TopBar';
import AddQuestion from '../../components/addQuestion/AddQuestion';

function DesignQuestion(props) {
    return (
        <div>
           <TopBar/>
           <div>
               <h1>Title of Survey</h1>
           </div>

           <div>
                <AddQuestion />
                <AddQuestion />
           </div>
        </div>
    );
}

export default DesignQuestion;