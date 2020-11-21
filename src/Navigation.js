import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';


function Navigation() {
    return (
        <div className="Navigation">
            <div className="Navigation__Logo">
                <h1>JobList</h1>
            </div>
            <div className="Navigation__Content">
                <ul>
                    <li><NavLink exact to="/" activeClassName="activeClass">HOME</NavLink></li>
                    <li><NavLink exact to="/about" activeClassName="activeClass">ABOUT US</NavLink></li>
                    <li><NavLink exact to="/categeory" activeClassName="activeClass">CATEGORY</NavLink></li>
                    <li><NavLink exact to="/contact" activeClassName="activeClass">CONTACT</NavLink></li>
                    <button className="Navigation__button">LOGIN</button>
                    <button className="Navigation__button">SIGN UP</button>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;
