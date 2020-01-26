import React, { Component } from 'react';
import Link from 'next/link'

class TopNav extends Component {
    state = {  }
    render() { 
        return ( <div style={{position : "absolute", width : "100%", height : "10%", top : "0", left:"0", backgroundColor :"purple", borderBottom : "2px solid black", zIndex:"100"}}>
            <h1 style={{marginTop:"0px"}}>Linkit TV</h1>
            <div className="session-info" style={{position : "absolute", top:"0", right:"0", marginRight:"15px"}}>
            <div>
            <Link href="/session"><a style={{color:"white", padding:"0px 10px 0px 10px"}}>Create session</a></Link>
            {/*<Link href="/premium"><a style={{color:"gold"}}>Get Premium</a></Link>*/}
            </div>
            </div>
        </div> );
    }
}
 
export default TopNav;

/*              Suggest videos here : <a target="_blank" href={window.location.href + "suggest/" + this.props.sessionName}>{window.location.href + "suggest/" + this.props.sessionName}</a> */