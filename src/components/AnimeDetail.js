import React from "react";

class AnimeDetail extends React.Component{

    componentDidMount(){
        
    }

    render(){
        return(
            <>
            <div className="col-md-12">
                <h1>{this.props.animeId}</h1>
                <button onClick={this.props.closeBtnHandler}>Close</button>
            </div>
            </>
        );
    }
}

export default AnimeDetail;