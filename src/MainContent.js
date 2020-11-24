import React from 'react';
import './MainContent.css'
import JobList from './JobList';
import Ads from './Ads';

function MainContent() {
    return (
        <div className="MainContent">
            <JobList/>
            <Ads/>
        </div>
    )
}

export default MainContent;
