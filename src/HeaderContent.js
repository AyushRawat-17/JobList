import React from 'react';
import './HeaderContent.css'
import SearchBar from './SearchBar';

function HeaderContent() {
    return (
        <div className="HeaderContent">
            <div className="HeaderContent__heading">
                <h1><span className="HeadingContent__Amount">1500+</span> Jobs posted last week</h1>
            </div>
            <SearchBar/>
            <div className="HeaderContent__tagline">
                <h5>Search by tags: Tecnology, Business, Consulting, IT Company, Design, Development</h5>
            </div>
        </div>
    )
}

export default HeaderContent;
