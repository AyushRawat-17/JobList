import React from 'react';
import './About.css';
import Navigation from './Navigation';
import JoinContent from './JoinContent';
import Footer from './Footer';

function About() {
    return (
        <div className="About">
            <Navigation/>
            <div className="About__Header">
                <h1>About Us</h1>
            </div>
            <div className="About__Choice">
                <h1>Why Choose Us</h1>
                <p>Who are in extremely love with eco friendly system.</p>
                <div className="About__ChoiceCardsList">
                    <div className="About__ChoiceCard">
                        <h2>Expert Technicians</h2>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="About__ChoiceCard">
                        <h2>Professional Service</h2>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="About__ChoiceCard">
                        <h2>Great Support</h2>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div className="About__ChoiceCardsList">
                    <div className="About__ChoiceCard">
                        <h2>Technical Skills</h2>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="About__ChoiceCard">
                        <h2>Highly Recomended</h2>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="About__ChoiceCard">
                        <h2>Positive Reviews</h2>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
            </div>
            <JoinContent/>
            <Footer/> 
        </div>
    )
}

export default About;
