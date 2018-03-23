import React from 'react';

class JobSearch extends React.Component {
    constructor(){
      super();
    }
    render() {
      return (
              <div>
                  <h2>{this.props.job.jobtitle}</h2>
                          <div key={this.props.job.jobkey}>
                              <a href={this.props.job.url} target="_blank"><h2>{this.props.job.jobtitle}</h2></a>
                              <h3>{this.props.job.city}</h3>
                              <p>{this.props.job.snippet}</p>
                          </div>
              </div>
      )
    }
}
export default JobSearch;