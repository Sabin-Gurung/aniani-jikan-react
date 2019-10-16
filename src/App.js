import React from 'react';

import './App.css';

const axios = require("axios").default;
const AnimeMini = require("./components/AnimeMini").default;
const AnimeDetail = require("./components/AnimeDetail").default;


class App extends React.Component {
  state = {
    animeResults: [],
    yearsOptions: [],
    noResults: true,
    searchOptions: {
      year: new Date().getFullYear().toString(),
      season: "summer",
    },
    animeDetailOptions : {
      animeId : null,
      visible : false
    }
  }

  onClickAnimeMini = (id)=>{
    return  (()=>{
      this.setState({animeDetailOptions : {animeId : id, visible : true}});
    });
  }

  onCloseAnimeDetail = ()=>{
    this.setState({animeDetailOptions : {animeId : null, visible : false}});
  }

  onYearSeasonSearchHandler = () => {
    axios.get(`https://api.jikan.moe/v3/season/${this.state.searchOptions.year}/${this.state.searchOptions.season}`)
      .then(res => res.data)
      .then(res => {
        this.setState({ animeResults: res.anime, noResults: false });
      });
  }

  onYearChange = (event) => {
    let val = event.target.value;
    this.setState({ searchOptions: { year: val, season: this.state.searchOptions.season } });
  }

  onSeasonChange = (event) => {
    let val = event.target.value;
    this.setState({ searchOptions: { year: this.state.searchOptions.year, season: val } });
  }

  componentDidMount() {
    let currentYear = new Date().getFullYear();
    var years = [];
    for (var i = currentYear; i >= 1950; --i) {
      years.push(i);
    }
    this.setState({ yearsOptions: years });
  }

  render() {
    let header = (
      <div className="header row">
        AniANI-Jikan
        </div>
    );

    let searchSeasonSection = (
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
    );

    let animeReasultsSection = (
        <div className="anime-results row">
          {
            this.state.noResults ?
              (<p>
                NO anime results.
            </p>)
              :
              this.state.animeResults.map(animeMini => <AnimeMini key={animeMini.mal_id} animeMini={animeMini} displayDetail={this.onClickAnimeMini(animeMini.mal_id)} />)
          }
        </div>
    );

    let animeDetailSection = (
      <div className="anime-detail-section row">
      <AnimeDetail animeId={this.state.animeDetailOptions.animeId} closeBtnHandler={this.onCloseAnimeDetail}></AnimeDetail>
      </div>
    );

    return (
      <div className="app-wrapper container">
        {header}
        {searchSeasonSection}
        {
          this.state.animeDetailOptions.visible ?
          animeDetailSection : 
          animeReasultsSection
        }
      </div>
    );
  }
}

export default App;
