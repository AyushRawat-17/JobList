import React from 'react';
import './Ads.css'

function Ads() {
    return (
        <div className="Ads">
            <div className="Ads__Location">
                <h2>Jobs by Location</h2><br/>
                <div className="Ads__Contries">
                    <p>New York</p>
                    <p>23</p>
                </div>
                <div className="Ads__Contries">
                    <p>Park Montana</p>
                    <p>13</p>
                </div>
                <div className="Ads__Contries">
                    <p>Atlanta</p>
                    <p>27</p>
                </div>
                <div className="Ads__Contries">
                    <p>Arizona</p>
                    <p>29</p>
                </div>
                <div className="Ads__Contries">
                    <p>Florida</p>
                    <p>17</p>
                </div>
                <div className="Ads__Contries">
                    <p>Delhi</p>
                    <p>43</p>
                </div>
                <div className="Ads__Contries">
                    <p>Mumbai</p>
                    <p>7</p>
                </div>
                <div className="Ads__Contries">
                    <p>Chicago</p>
                    <p>3</p>
                </div>
            </div>
        </div>
    )
}

export default Ads
