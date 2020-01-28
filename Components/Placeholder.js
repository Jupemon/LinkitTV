import React, { Component } from 'react';


const PlaceHolder = (props) => {
    const requestUrl = window.location.href.replace("session", "suggest")+ "/" + props.sessionName
    return ( <div style={{position : "absolute", width :"90%", height: "90%", textAlign:"center", backgroundColor:"#b700b7", bottom:"0px", right:"0px", zIndex:"99", visibility: props.visibility ? "hidden" : null}}>
        <h1 style={{marginTop:"200px"}}>LinkitTV</h1>
        <p>send video suggestions to this link : </p>
        <p><b><a target="_blank" href={requestUrl}>{requestUrl}</a></b></p>
        <p>waiting for videos..</p>
    </div> );
}
 
export default PlaceHolder;