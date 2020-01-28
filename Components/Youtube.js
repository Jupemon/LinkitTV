import PropTypes from 'prop-types';
import React from 'react';
import VideoQueue from './VideoQueue';
import PlaceHolder from './Placeholder';

class YouTubeVideo extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  state={
    showPlaceHolder : true,
    firstVideoPlayed : false,
    videoIndex : 0,
    videoList : []
  }

  componentDidMount = () => {
    // On mount, check to see if the API script is already loaded

    //if (!window.YT && 6==5) { // If not, load the script asynchronously
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = this.loadVideo;
      console.log("loading async")
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      /*
    } else { // If script is already there, load the video directly
      console.log("already loaded not asunc")
      this.loadVideo();
    }*/
    /*
    document.querySelector("iframe").style.position = "absolute"
    document.querySelector("iframe").style.height = "100%"
    document.querySelector("iframe").style.width = "100%"
    document.querySelector("iframe").style.top = "0"
    document.querySelector("iframe").style.left = "0"*/
    
  };

  loadVideo = () => {
    
    const { id } = this.props;
    const {videoIndex, videoList} = this.state

    // the Player object is created uniquely based on the id in props
    this.player = new window.YT.Player(`youtube-player-${id}`, {
      videoId: id,
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange
      },
    });
    //this.setState({videoIndex : this.state.videoIndex ++})
  };


  onPlayerReady = event => {
    console.log(document.querySelector("iframe").style, "iframe info here")
    document.querySelector("iframe").style.position = "absolute";
    document.querySelector("iframe").style.height = "90%"
    document.querySelector("iframe").style.width = "90%"
    document.querySelector("iframe").style.bottom = "0"
    document.querySelector("iframe").style.right = "0"
    console.log(event.target, "THE TARGET TO CECKER")
    //event.target.playVideo();
  };

  onPlayerStateChange = event => {

    // Variables

    if (event.data == -1 ) { // update playlist if they dont match
      let videoIndex = this.state.videoIndex;
      var index = event.target.getPlaylistIndex();
      const playlist = this.state.videoList.map(v => {
        return v.videoUrl
      })
      if(event.target.getPlaylist().length != playlist.length) { // if the current playlist doesnt match the state playlist
        event.target.loadPlaylist(playlist, videoIndex + 1);      
      }

      this.setState({videoIndex : event.target.getPlaylistIndex()})
    }
    if (event.data == YT.PlayerState.ENDED) { // starts playlist over if it ends

      if (event.target.getPlaylistIndex() == event.target.getPlaylist().length-1) {
        const playlist = this.state.videoList.map(v => {
          return v.videoUrl
        })
        console.log("playlist has ended")
        this.player.loadPlaylist({playlist : playlist}, event.target.getPlaylistIndex())
      }
    }  
  }

  updateVideoList = (vid) => {
    let videoList = this.state.videoList
    console.log(vid, "VID TO BE ADDED")
    console.log(this.state.videoList, "VIDEOLIST")
    
    if (videoList.length <= 0) { // if list is empty play the first video
      const playlist = []
      playlist.push(vid.videoUrl)
      this.player.loadPlaylist({playlist: playlist})
    }
    videoList.push(vid)
    if (videoList.length > 40) { // keep the max videolist lenght at this num
      videoList = videoList.slice(1)
    }
    this.setState({videoList : videoList, showPlaceHolder : false})
    
    
  }

  selectVideo = v => { // called when clicking a video on video queue
    console.log("RELOADING, COVER ME")
    const videoIndex = this.state.videoList.indexOf(v)
    const playlist = this.state.videoList.map(i => {
      return i.videoUrl
    })
    this.setState({videoIndex})
    this.player.loadPlaylist(playlist, videoIndex);
  }
  loadNextVideo = v => {

  }

  render = () => {
    
    const { id } = this.props;
    return (<div>
        <div id={`youtube-player-${id}`} />
        <PlaceHolder sessionName={this.props.sessionName} visibility={!this.state.showPlaceHolder}/>
        <VideoQueue videoIndex={this.state.videoIndex} selectVideo={this.selectVideo} videoList={this.state.videoList} updateVideoList={this.updateVideoList} sessionName={this.props.sessionName}/>
        </div>);
  };
}

export default YouTubeVideo;