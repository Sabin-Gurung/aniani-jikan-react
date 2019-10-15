import React from 'react';

import './App.css';

const axios = require("axios").default;
const AnimeMini = require("./components/AnimeMini").default;


class App extends React.Component {
  state = {
    animeResults: [],
    yearsOptions: [],
    noResults: true,
    searchOptions : {
      year : new Date().getFullYear().toString(),
      season : "summer",
    }
  }

  onYearSeasonSearchHandler = ()=>{
    alert(`${this.state.searchOptions.year} > ${this.state.searchOptions.season}`);

    axios.get(`https://api.jikan.moe/v3/season/${this.state.searchOptions.year}/${this.state.searchOptions.season}`)
      .then(res => res.data)
      .then(res => {
        this.setState({ animeResults: res.anime, noResults : false });
      });
  }

  onYearChange = (event)=>{
    let val = event.target.value;
    this.setState({searchOptions : {year : val, season : this.state.searchOptions.season}});
  }

  onSeasonChange = (event)=>{
    let val = event.target.value;
    this.setState({searchOptions : {year : this.state.searchOptions.season, season : val}});
  }

  componentDidMount() {
    let currentYear = new Date().getFullYear();
    var years = [];
    for (var i = 1950; i <= currentYear; ++i) {
      years.push(i);
    }
    this.setState({yearsOptions : years});
  }

  render() {
    return (
      <div className="app-wrapper container">
        <div className="header row">
          AniANI-Jikan
        </div>
        {/* <div className="searchSection row">
          <div className="col-md-6 offset-md-3">
            <input type="text" className="form-control" placeholder="Enter keyword to serach Anime" />
          </div>
        </div> */}
        <div className="row seasonSearchSection">
          <div class="input-group col-md-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Year</span>
            </div>
            <select class="form-control" onChange={this.onYearChange}>
              {
                this.state.yearsOptions.map(q => <option>{q}</option>)
              }
            </select>
          </div>
          <div class="input-group col-md-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Season</span>
            </div>
            <select class="form-control" onChange={this.onSeasonChange}>
              <option value="summer">summer</option>
              <option value="winter">winter</option>
              <option value="fall">fall</option>
              <option value="spring">spring</option>
            </select>
          </div>
          <div className="col-md-3">
            <button className="btn btn-success" onClick={this.onYearSeasonSearchHandler}>Go</button>
          </div>
        </div>
        <div className="anime-results row">
          {
            this.state.noResults ?
            (<p>
              NO anime results.
            </p>)
            :
            this.state.animeResults.map(animeMini => <AnimeMini key={animeMini.mal_id} animeMini={animeMini} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
