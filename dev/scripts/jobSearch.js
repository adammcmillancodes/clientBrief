class JobSearch extends React.Component {
    constructor(){
      super();
      this.state = {
        jobListing: []
      }
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
              <input type="text" title="jobTitle" className="jobTitle" placeholder="Desired title"/>
              where I can make 
              <input type="number" title="salary" className="salary" placeholder="Salary Expectations"/>
              living in 
              <input type="text" title="jobLocation" className="jobLocation" placeholder="Job Location"/>
              <button type="submit" className="submit">Submit</button>
            </form>
            {/* <div>
              {this.state.JobListing.map((job, i) => {
                return (
                  <div key={job.jobkey}>
                    <h2>${job.jobtitle}</h2>
                    <p>${job.snippet}</p>
                  </div>
                )
              })}
            </div> */}
          </main>
        </div>
      )
    }
}