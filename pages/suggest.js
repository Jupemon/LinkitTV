import React, { Component } from 'react'
import TopNav from '../Components/TopNav';


const buttonStyle = {
  padding: "5px 5px",
  color: "white",
  backgroundColor: "purple",
  border: "white 2px solid",
  fontFamily: "unset",
  marginTop: "15px",
  fontSize: "15px",
}

const divStyle ={
  backgroundColor : "purple",
  margin : "0 auto",
  width : "50%",
  padding : "80px",
  textAlign : "center",
  marginBottom : "50px",

  borderRadius : "20px",
  boxShadow : "rgba(0,0,0,0.8) 0 0 10px"
}



export default class extends Component {
  static getInitialProps({ query: { id } }) {
    return { postId: id }
  }
  constructor(props) {
    super(props);
    this.state = {
      loading : false,
      validForm : false,
      videoUrl : "",
      videoName : "",
      postId : this.props.postId
    }
  }

setUrl = (url) => {
  const validation = this.getYoutubeVideoId(url)
  if(validation) {
    console.log("accept")
    this.setState({validForm : true, videoUrl : validation})
  }
  else {
    this.setState({validForm : false})
    console.log("false")
  }
}

getYoutubeVideoId = (ytlink) => { // returns the youtube video i from youtube link
  var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = ytlink.match(regExp);
  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return false
  }
}

  componentDidMount() {
    console.log(this.props.postId)
  }
  sendSuggestion = (videoUrl, videoName) => {
    
    fetch(`/suggestvideo`,
    {
      method:"POST",
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    ).then(d => d.json()).then(d => {
      console.log("data gotten here it is :", d)
  })
  console.log(this.state)
  }


  render() {
    return (
      <div style={{fontFamily: '"Comic Sans MS", cursive, sans-serif', color:"white", fontSize:"20px", marginTop:"150px" }}>
        <TopNav />
        <div style={divStyle}><h1>Suggest videos to {this.props.postId}</h1></div>
        <div style={divStyle}>
        Video Name : <input style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}} type="text" onChange={(e) => {this.setState({videoName : e.currentTarget.value})}}/>
        <div>Youtube Video Link : <input style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}} type="text" onChange={(e) => {this.setUrl(e.currentTarget.value)}}/></div>
        {this.state.validForm ? null : <p style={{color:"red"}}>Not valid youtube link!</p>}
        <button disabled={this.state.validForm ? false : true} onClick={() => {this.sendSuggestion(document.querySelector('input').value)}} style={buttonStyle}>Suggest</button>
        </div>
        
        
      </div>
    )
  }
}
