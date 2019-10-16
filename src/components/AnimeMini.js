import React from "react"
import './AnimeMini.css'

class AnimeMini extends React.Component {

    openPopUpHandler = ()=>{
        alert(`opening information of ${this.props.animeMini.title}`)
    }

    render() {
        return (
            <div className="anime-mini col-sm-4 col-md-3 col-lg-2 mt-3" onClick={this.openPopUpHandler}>
                <img src={this.props.animeMini.image_url} alt="Card image cap"></img>
                <div>
                    <p>{this.props.animeMini.title}</p>
                    <p>{this.props.animeMini.score}</p>
                </div>
            </div>
        );
    }
}

export default AnimeMini;