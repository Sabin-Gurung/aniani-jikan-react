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
                                    <button className="btn btn-success" onClick={this.props.closeBtnHandler}>Back</button>
                                    <h3>{anime.title}</h3>
                                    <p>
                                        {anime.synopsis}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <table className="table">
                                    <tbody>
                                            <tr>
                                                <th>MAL ID</th>
                                                <td>{anime.mal_id}</td>
                                            </tr>
                                            <tr>
                                                <th>Type</th>
                                                <td>{anime.type}</td>
                                            </tr>
                                            <tr>
                                                <th>Source</th>
                                                <td>{anime.source}</td>
                                            </tr>
                                            <tr>
                                                <th>Episodes</th>
                                                <td>{anime.episodes}</td>
                                            </tr>
                                            <tr>
                                                <th>Genres</th>
                                                <td>
                                                {
                                                    anime.genres.map(genre=><span>{genre.name},</span>)
                                                }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Producers</th>
                                                <td>
                                                {
                                                    anime.producers.map(producer=><span>{producer.name},</span>)
                                                }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Premiered</th>
                                                <td>{anime.premiered}</td>
                                            </tr>
                                            <tr>
                                                <th>Score</th>
                                                <td>{anime.score}</td>
                                            </tr>
                                            <tr>
                                                <th>Trailer</th>
                                                <td>{
                                                    anime.trailer_url ?
                                                    (<iframe src={anime.trailer_url}/>)
                                                    :
                                                    ("n/a")
                                                }</td>
                                            </tr>
                                        </tbody>
                                    </table>
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