import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import JobSearch from "./JobSearch";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jobListing: [],
      jobTitle: "",
      jobLocation: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    // since componentDidMount is a lifecycle method that should only really be called once (when the component mounts) we can instead call our own method that gets data for us
    this.getData();
  }

  componentDidMount() {
    // you can think of this lifecycle method as: what do i need to happen when this app launches / this component comes on the page? since you aren't actually sending any data to this ajax request it will not return anything as is.
    // if you want to make this request both when the component mounts (with some default data) AND when the form submits, it makes sense to make this a separate method and call it in both places.

    this.getData();
  }

  getData() {
    axios
      .get("https://cors-anywhere.herokuapp.com/api.indeed.com/ads/apisearch", {
        params: {
          publisher: "6808461958676807",
          v: 2,
          format: "json",
          // this is ONE way that you could set some defaults if you wanted some data to load right away without user input. it will check if there is state, and if it returns a 'falsey' value, it will fill it out with the string instead.
          q: this.state.jobTitle || "front end developer",
          l: this.state.jobLocation || "toronto",
          co: "CA",
          sort: "date",
          highlight: 0,
          limit: 25
        }
      })
      .then(res => {
        // remove console logs once you're done with them!
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
          <form onSubmit={this.handleSubmit}>
            I would to work as a(n)
            <input
              onChange={this.handleChange}
              value={this.state.jobTitle}
              type="text"
              title="jobTitle"
              id="jobTitle"
              className="jobTitle"
              placeholder="Desired title"
            />
            living in
            <input
              onChange={this.handleChange}
              value={this.state.jobLocation}
              type="text"
              title="jobLocation"
              id="jobLocation"
              className="jobLocation"
              placeholder="Job Location"
            />
            <button type="submit" className="submit">
              Submit
            </button>
          </form>

          {// this is a ternary operator (another way of writing an if/else statement that you can insert into jsx) that will check if there were search results. if there were, map through and render the job component. if not, show an error message!

          this.state.jobListing.length > 0 ? (
            // remove the i argument as you are not using it here
            this.state.jobListing.map(job => {
              // to resolve the error about each component needing a unique key, you can pass it the id that you're getting from indeed
              return <JobSearch job={job} key={job.jobkey} />;
            })
          ) : (
            <p>
              sorry, we didn't find any jobs that matched your search terms! try
              again!
            </p>
          )}
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
