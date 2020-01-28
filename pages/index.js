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

  render() {
    return (
    <div style={{fontFamily: '"Comic Sans MS", cursive, sans-serif', color:"white", fontSize:"20px", marginTop:"150px" }}>
    <TopNav />
    <LandingPage />
      </div>)
  }
}