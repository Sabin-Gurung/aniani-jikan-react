import React from "react"
const axios = require("axios").default;

var AnimeMini = props => (
    <div className="anime-mini card col-md-2 p-2">
        <img class="card-img-top" src={props.animeMini.image_url} alt="Card image cap"></img>
        <div className="card-body">
            <h5 className="class-title">{props.animeMini.title}</h5>
            <h2>{props.animeMini.score}</h2>
        </div>
    </div>
);

export default AnimeMini;