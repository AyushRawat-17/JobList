import React from 'react';
import './Category.css';
import Navigation from './Navigation';
import MainContent from "./MainContent";
import JoinContent from './JoinContent';
import Footer from './Footer';

function Category() {
    return (
        <div className="Category">
            <Navigation/>
            <div className="Category__Header">
                <h1>Job Category</h1>
            </div>
            <MainContent/>
            <JoinContent/>
            <Footer/>
        </div>
    )
}

export default Category;
