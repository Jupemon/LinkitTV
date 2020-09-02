import { Component } from 'react'
import TopNav from '../Components/TopNav'
import LandingPage from '../Components/LandingPage'


export default class extends Component { // Renders the landing page

  render() {
    return (
    <div style={{fontFamily: '"Comic Sans MS", cursive, sans-serif', color:"white", fontSize:"20px", marginTop:"150px" }}>
    <TopNav />
    <LandingPage />
      </div>)
  }
}