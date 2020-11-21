import React from "react";
import Paper from "@material-ui/core/Paper";
import "./FeaturedJob.css";

function FeaturedJob() {
  return (
    <div className="FeaturedJob">
      <h1>Featured Job Categories</h1>
      <h6>Who are in extremely love with eco friendly system.</h6>
      <div className="FeaturedJob__CardList">
        <Paper className="FeaturedJob__Card" elevation={3}>
          <img
            src="https://joblistwebsite.s3.ap-south-1.amazonaws.com/budget+(1).png"
            alt="accounting"
          />
          <h5>Accounting</h5>
        </Paper>
        <Paper className="FeaturedJob__Card" elevation={3}>
          <img
            src="https://joblistwebsite.s3.ap-south-1.amazonaws.com/web-development.png"
            alt="development"
          />
          <h5>Development</h5>
        </Paper>
        <Paper className="FeaturedJob__Card" elevation={3}>
          <img
            src="https://joblistwebsite.s3.ap-south-1.amazonaws.com/project-management.png"
            alt="technology"
          />
          <h5>Technology</h5>
        </Paper>
        <Paper className="FeaturedJob__Card" elevation={3}>
          <img
            src="https://joblistwebsite.s3.ap-south-1.amazonaws.com/newspaper.png"
            alt="mediaandnews"
          />
          <h5>Media and News</h5>
        </Paper>
        <Paper className="FeaturedJob__Card" elevation={3}>
          <img
            src="https://joblistwebsite.s3.ap-south-1.amazonaws.com/consulting.png"
            alt="medical"
          />
          <h5>Medical</h5>
        </Paper>
        <Paper className="FeaturedJob__Card" elevation={3}>
          <img
            src="https://joblistwebsite.s3.ap-south-1.amazonaws.com/embassy.png"
            alt="government"
          />
          <h5>Government</h5>
        </Paper>
      </div>
    </div>
  );
}

export default FeaturedJob;
