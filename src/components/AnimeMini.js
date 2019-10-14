import React from "react"
const axios = require("axios").default;

var AnimeMini = props => (
    // <div className="anime-mini">
    <li>
        {props.animeMini.title}
    </li>
    // </div>
);

export default AnimeMini;