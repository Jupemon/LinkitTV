import { Component } from 'react';
import TopNav from './TopNav';

function fetcher(url) { // used for fetching
    return fetch(url).then(r => r.json());
  }

const buttonStyle = {
    color : "white",
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

const h1Style = {
    
}


class CreateSession extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            errorMessage : "",
            loading : false
         }
    }

    fetcher = url => {
        return fetch(url).then(r => r.json());
    }

    createTheSession = () => {
        const name = document.querySelector('input').value
        fetch(`/api/test?name=${name}`).then(r => {
            if (r.status === 200) {
                console.log("everything went well")
            }
            else if (r.status === 404) {
                console.log("not found")
            }
            else {
                console.log(r.status)
                console.log("something horrible went wrong")
            }
        })
        //const {data, error} = this.fetcher(`/api/test?${"name"}`)

    }

    sendRequest = () => {
        const name = document.querySelector('input').value
        if (name.length > 0) {

            fetch('/createsession', {
                method:"POST",
                headers : {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name : name
                })
            }).then(d => {
                if (d.status === 200) {
                    d.json()
                    this.props.sessionCreated(name)
                }
                else {
                    this.setState({errorMessage : "Session name is already taken"})
                }
            })
        }
        else {
            this.setState({errorMessage : "Please enter a session name"})
        }

    }
    render() { 

        return ( <div>

            <div style={divStyle}><h1>Create new session</h1></div>
            
            <div style={divStyle}>Session Name : 
            <input style={{fontFamily: '"Comic Sans MS", cursive, sans-serif' }} type="text"/>
            <p style={{color:"red"}}>{this.state.errorMessage}</p>
            <div onClick={() => {this.sendRequest()}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "purple"}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = "purple"; e.currentTarget.style.color = "white"}} style={{width : "70px", marginRight :"50%", marginLeft:"50%", cursor : "pointer"}}>Create Session</div>
            </div>
            
            </div> );
    }
}
 
export default CreateSession;