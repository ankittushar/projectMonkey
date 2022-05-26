import React from 'react';
import TopBar from './components/TopBar';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import CreateSurvey from './pages/createSurvey/CreateSurvey';
import DesignQuestion from './pages/designSurvey/DesignSurvey';

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TopBar/>} />
                
                <Route path="/create-survey" element={<CreateSurvey/>} />
                <Route path="/design" element={<DesignQuestion/>} />
            </Routes>
        
        </BrowserRouter>
        
    );
}

export default App;