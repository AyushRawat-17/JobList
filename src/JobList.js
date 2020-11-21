import React from "react";
import "./JobList.css";

function JobList() {
  return (
    <div className="JobList">
      <div className="JobList__Content">
        <h3>Software Developer</h3>
        <div className="JobList__Button">
          <button>❤</button>
          <button>Apply</button>
        </div>
        <h5>Premium Labels Limited</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod temporinc ididunt ut dolore magna aliqua.
        </p>
        <h4>Job Nature: Full Time</h4>
        <h4>Job Location: Delhi</h4>
        <h4>Salary: 15K-25K</h4>
      </div>
      <div className="JobList__Content">
        <h3>Teacher</h3>
        <div className="JobList__Button">
          <button>❤</button>
          <button>Apply</button>
        </div>
        <h5>XYZ School</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod temporinc ididunt ut dolore magna aliqua.
        </p>
        <h4>Job Nature: Full Time</h4>
        <h4>Job Location: Ghaziabad</h4>
        <h4>Salary: 10K-15K</h4>
      </div>
      <div className="JobList__Content">
        <h3>MERN Stack Developer</h3>
        <div className="JobList__Button">
          <button>❤</button>
          <button>Apply</button>
        </div>
        <h5>MNC</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod temporinc ididunt ut dolore magna aliqua.
        </p>
        <h4>Job Nature: Internship</h4>
        <h4>Job Location: Mumbai</h4>
        <h4>Salary: 5K-15K</h4>
      </div>
      <div className="JobList__Content">
        <h3>Android Developer</h3>
        <div className="JobList__Button">
          <button>❤</button>
          <button>Apply</button>
        </div>
        <h5>Zomato</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod temporinc ididunt ut dolore magna aliqua.
        </p>
        <h4>Job Nature: Full Time</h4>
        <h4>Job Location: Hyderabad</h4>
        <h4>Salary: 20K-25K</h4>
      </div>
    </div>
  );
}

export default JobList;
