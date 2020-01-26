import React, { Component } from 'react';
import io from 'socket.io-client'


class VideoQueue extends Component {

    state = {
        video : null
    }

    componentDidMount() {
        console.log("component mounted frontend")
        this.socket = io();
        console.log(`${this.props.sessionName} video`)
        this.socket.on(`${this.props.sessionName} video`, (msg) => {
            console.log(msg, "this was sent to you check ti out")
            const videoList =  this.props.videoList;
            const videoUrl = msg.videoUrl
            const videoName = msg.videoName
            this.props.updateVideoList(msg)
            this.setState({video: msg}) // used for re rendering
        } )
    }
    render() { 
        const videoIndex = this.props.videoIndex;
        return ( <div style={{position:"absolute", left:"0px", bottom: "0", width:"10%", height:"90%", backgroundColor:"purple", zIndex:"99", fontSize:"15px", borderRight:"2px solid black"}}>
        <ul style={{paddingLeft : "5px"}}><p style={{fontWeight : "bold"}}>Video Queue</p>
        {this.props.videoList.map(v => {
            return <li style={{color: this.props.videoList[videoIndex] === v ? "green" : "white", cursor : "pointer" }} onClick={() => {this.props.selectVideo(v)}}>{v.videoName}</li>
        })}
        </ul>
        </div> );
    }
}
 
 
export default VideoQueue;