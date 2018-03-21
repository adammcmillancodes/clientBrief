import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
})

  .then(function (res) {
    console.log(res.data.results);
  });

class App extends React.Component {
    render() {
      return (
        <div>
          <h1> hellooo </h1>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
