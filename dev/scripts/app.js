import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import JobSearch from './JobSearch';
// import {
//   BrowserRouter as Router,
//   Route, Link
// } from 'react-router-dom';


class App extends React.Component {
    constructor(){
      super();
      this.state = {
        jobListing: [],
        jobTitle: '',
        jobLocation: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
     console.log(this)
      this.setState({
        [e.target.id]: e.target.value
      });
    }

    componentDidMount(){
      axios.get("https://cors-anywhere.herokuapp.com/api.indeed.com/ads/apisearch", {
        params: {
          publisher: "6808461958676807",
          v: 2,
          format: "json",
          q: "Front End Web Developer",
          l: "Toronto",
          co: "CA",
          sort: "date",
          highlight: 0,
          limit: 25
        }
      }).then((res) => {
        console.log(res.data.results);
        this.setState({ jobListing: res.data.results });
        
      });
    }

    render() {
      return (
        <div>
          <header>
            <h1>Joblify</h1>
            <h3>Gainfully helpful</h3>
          </header>
          <main>
            <form>
              I would to work as a(n) 
              <input onChange={this.handleChange} value={this.state.jobTitle} type="text" title="jobTitle" id="jobTitle" className="jobTitle" placeholder="Desired title"/>
              living in 
              <input onChange={this.handleChange} value={this.state.jobLocation} type="text" title="jobLocation" id="jobLocations" className="jobLocation" placeholder="Job Location"/>
              <button type="submit" className="submit">Submit</button>
            </form>
            {this.state.jobListing.map((job, i) => {
                      return (

                        <JobSearch job={job} />
                          
                      )
                  })}
          </main>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
