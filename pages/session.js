import Link from 'next/link'
import Session from '../Components/Session'
import CreateSession from '../Components/CreateSession'
import { Component } from 'react'
import YouTubeVideo from '../Components/Youtube'
import PlaceHolder from '../Components/Placeholder'
import VideoQueue from '../Components/VideoQueue'
import TopNav from '../Components/TopNav'
import LandingPage from '../Components/LandingPage'



export default class extends Component {
  state={
    sessionCreated : false,
    sessionName : ""
  }

  sessionCreated = (name) => {
    this.setState({sessionCreated : true, sessionName : name})
  }
  render() {
    return (
    <div style={{fontFamily: '"Comic Sans MS", cursive, sans-serif', color:"white", fontSize:"20px", marginTop:"150px" }}>
        {this.state.sessionCreated ? <div>
          <Session sessionName={this.state.sessionName}/>
        </div>:
        <div>
        <TopNav />
          <CreateSession sessionCreated={this.sessionCreated}/>
        </div>
        }
      </div>)
  }
}

/*     return (<div style={{fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>
        {this.state.sessionCreated ? <div>
          <Session sessionName={this.state.sessionName}/>
        </div>:
        <div>
        <TopNav />
          <CreateSession sessionCreated={this.sessionCreated}/>
        </div>
        }
      </div>)*/