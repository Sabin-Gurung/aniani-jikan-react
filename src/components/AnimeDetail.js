import React from "react";

const axios = require("axios").default;

class AnimeDetail extends React.Component {
    state = { anime: null };

    componentDidMount() {
        axios.get(`https://api.jikan.moe/v3/anime/${this.props.animeId}`)
            .then(res => res.data)
            .then(res => {
                this.setState({ anime: res });
            });
    }

    render() {
        let anime = this.state.anime;
        return (
            <>
                {
                    anime ?
                        (
                            <>
                            <div className="col-md-12 row">
                                <div className="col-md-4">
                                    <img src={anime.image_url}></img>
                                </div>
                                <div className="col-md-8">
                                    <button onClick={this.props.closeBtnHandler}>Close</button>
                                    <h3>{anime.title}</h3>
                                    <p>
                                        {anime.synopsis}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-12">

                            </div>
                            </>
                        )
                        :
                        (<h1>Loading</h1>)
                }
            </>
        );
    }
}

export default AnimeDetail;