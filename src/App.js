import React from 'react';

import './App.css';

const axios = require("axios").default;
const AnimeMini = require("./components/AnimeMini").default;


class App extends React.Component {
  state={
    animeResults : []
  }

  componentDidMount(){
    axios.get("https://api.jikan.moe/v3/top/anime")
    .then(res=>res.data)
    .then(res=>{
      this.setState({animeResults : res.top});
    });
  }

  render() {
    return (
      <div className="app-wrapper container">
        <div className="header">
          <h1><strong>AniANI-Jikan</strong></h1>
        </div>
        <div className="searchSection">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <input type="text" className="form-control" placeholder="Enter keyword to serach Anime"/>
            </div>
          </div>
        </div>
        <div className="anime-results row">
            {
              this.state.animeResults.map(animeMini=><AnimeMini key={animeMini.mal_id} animeMini={animeMini}/>)
            }
        </div>
      </div>
    );
  }
}

export default App;
