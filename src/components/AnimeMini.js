import React from "react"
import './AnimeMini.css'

const axios = require("axios").default;

var AnimeMini = props => (
    <div className="anime-mini col-sm-4 col-md-3 col-lg-2 mt-3">
        <img src={props.animeMini.image_url} alt="Card image cap"></img>
        <div>
            <p>{props.animeMini.title}</p>
            <p>{props.animeMini.score}</p>
        </div>
    </div>
);

export default AnimeMini;