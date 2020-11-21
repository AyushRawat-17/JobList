import React from 'react';
import './Contact.css';
import Navigation from './Navigation';
import Footer from './Footer';

function Contact() {
    return (
        <div className="Contact">
            <Navigation/>
            <div className="Contact__Header">
                <h1>Contact Us</h1>
            </div>
                <form className="Contact__Form">
                    <input type="text" placeholder="Enter your name"/>
                    <input type="text" placeholder="Enter email address"/>
                    <input type="text" placeholder="Enter your subject"/>
                    <textarea placeholder="Message" />
                    <button type="submit">Send Message</button>
                    </form>
            <Footer/>
        </div>
    )
}

export default Contact;
