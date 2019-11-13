import React, { Component } from 'react';
import VideoPlay from "react-player"
class Youtube extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            url:"",
            videoUrl:"",
            play:false
         }
    }
    handleVideoUrl = (event) =>{
        this.setState({
            url:event.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            videoUrl:this.state.url
        })
    }
    handleplay = () => {
        this.setState({
            play:!this.state.play
        })
    }
    render() { 
        console.log(this.state.url)
        return ( 
            <div className="App">
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="video" 
            onChange={this.handleVideoUrl}
            placeholder="paste video url eg: https://www.youtube.com/watch?v=okNIogXQndE"/>
                <button type="button" 
            onClick={this.handleplay}>Click to play</button>
            </form>
                <VideoPlay url={this.state.url}  
                controls={true} 
                playing={this.state.play}
                light={true}
                className="video"/>
            </div>
         );
    }   
}
 
export default Youtube;