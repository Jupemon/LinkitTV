import { Component } from 'react';

class SessionInfo extends Component {
    state = { 
        showInfo : false
     }
    
    render() {
        const requestUrl = window.location.href.replace("session", "suggest")+ "/" + this.props.sessionName
        return ( <div style={{position:"absolute", top:"0px", right:"5px", zIndex:"200", textAlign:"right"}}>
        <div><p onMouseEnter={() => {}} onClick={() => {this.setState({showInfo : !this.state.showInfo})}} style={{cursor:"pointer"}}>{this.state.showInfo? "Hide" : "Show"} Info</p>
            {this.state.showInfo?
                <div>
                <p>Video Suggestions : <b><a style={{color:"white"}} target="_blank" href={requestUrl}>{requestUrl}</a></b></p>
            </div>
            :
            null
            }

        </div>
        </div> );
    }
}
 
export default SessionInfo;