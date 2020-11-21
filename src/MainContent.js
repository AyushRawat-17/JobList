import React from 'react';
import './MainContent.css'
import JobList from './JobList';
import Ads from './Ads';
// import Button from '@material-ui/core/Button';

function MainContent() {
    return (
        <div className="MainContent">
            <JobList/>
            <Ads/>
            {/* <Button variant="contained">LOAD MORE JOB POSTS</Button> */}
        </div>
    )
}

export default MainContent;
