import { Component } from 'react';
import io from 'socket.io-client'
import VideoQueue from './VideoQueue';
import YouTubeVideo from './Youtube';
import PlaceHolder from './Placeholder';
import TopNav from './TopNav';

class Session extends Component {
    constructor(props) {
    super(props)
    this.state = { 
        videoList : []
     }
    }
    addVideo = (videoName) => {
        const videoList = this.state.videoList
        videoList.push(videoName)
        this.setState({videoList : videoList})
    }
    componentDidMount() {
        /*
        console.log("component mounted frontend")
        this.socket = io();
        console.log(`${this.props.sessionName} video`)
        this.socket.on(`${this.props.sessionName} video`, (msg) => {
            console.log(msg)
            const videoUrl = msg.videoUrl
            const videoName = msg.videoName
            this.addVideo(msg.videoName)
        } )*/
    }
    render() { 
        return ( <div>
        <TopNav />
        <YouTubeVideo sessionName={this.props.sessionName} id={"B1lNhNHdoPI"}/>
        </div> );
    }
}
 
export default Session;

/*        session Name ={this.props.sessionName}
            <ul>Suggested videos list
            {this.state.videoList.map(i => {
                return <li>{i}</li>
            })}
            </ul>*/