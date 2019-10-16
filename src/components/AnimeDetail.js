import React from "react";

const axios = require("axios").default;

class AnimeDetail extends React.Component{
    state = {anime : null};

    componentDidMount(){
        axios.get(`https://api.jikan.moe/v3/anime/${this.props.animeId}`)
        .then(res=>res.data)
        .then(res=>{
            this.setState({anime : res});
        });
    }

    render(){
        let anime = this.state.anime;
        return(
            <>
                <div className="col-md-12">
                    {
                        anime ? 
                        (
                            <>
                            <h1>{anime.title}</h1>
                            <img src={anime.image_url}></img>
                            <button onClick={this.props.closeBtnHandler}>Close</button>
                            </>
                        ) 
                        : 
                        (<h1>Loading</h1>)
                    }
                </div>
            </>
        );
    }
}

export default AnimeDetail;