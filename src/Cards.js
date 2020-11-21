import React from 'react';
import './Cards.css';
import Paper from '@material-ui/core/Paper';

function Cards() {
    return (
        <div className="Cards">
            <Paper className="Cards__Content" elevation={3} >
                <h3>Searching</h3><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </Paper>
            <br/>
            <Paper className="Cards__Content" elevation={3} >
                <h3>Applying</h3><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </Paper>
            <br/>
            <Paper className="Cards__Content" elevation={3} >
                <h3>Security</h3><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </Paper>
            <br/>
            <Paper className="Cards__Content" elevation={3} >
                <h3>Notifications</h3><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </Paper>
        </div>
    )
}

export default Cards;
