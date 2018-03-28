import React from "react";

// since this component doesn't need state / use any lifecycle methods, you can just use a simple functional component here!

const JobSearch = props => {
  return (
    <div>
      <h2>{props.job.jobtitle}</h2>
      <div key={props.job.jobkey}>
        <a href={props.job.url} target="_blank">
          <h2>{props.job.jobtitle}</h2>
        </a>
        <h3>{props.job.city}</h3>
        <p>{props.job.snippet}</p>
      </div>
    </div>
  );
};

export default JobSearch;
