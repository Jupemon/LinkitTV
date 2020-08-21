# Linkit TV

## The idea behind the project

The rise of [Reaction Content](https://en.wikipedia.org/wiki/Reaction_video) gave me a great idea. I decided to create an app where livestreamers could watch online videos during a stream. A streamer can visit the site and share the generated URL link with their fans. The Fans can send videos to be watched by the livestreamer. Think of it as an online TV screen where you can share the remote with anyone on the internet.

## How it works

1. Open the LinkitTV site and start a new session. 

2. It Loads up an embedded youtube player.

3. After loading the player it generates an URL with an unique query string which you can share online.

4. People can you send youtube video links via the URL.

5. The embedded player starts playing the linked youtube videos.

6. Any additional linked videos are added to a queue and autoplayed.


## Tools / dependencies used

- Created with **React** & **Node**

- **Express** used for creating the API.

- **Bodyparser** Used for parsing HTTP request bodies.

- **NextJs** used for server side rendering. Rendering should be faster because NEXTJS prerenders everything on the server. With it i could also conveniently combine the frontend and backend together in the project. 

- **Socket.IO** used for real time bidirectional communication between the server and client. Basically it allows the server to initiate communication with frontend client after certain events happen.

- **Youtube Iframe API** I also needed to choose an embedded player which could play online videos. Youtube was the natural choice because of its popularity and massive video library. Google also has great [Documentation](https://developers.google.com/youtube/iframe_api_reference) for it but it's all written in vanilla javascript, but i figured out how to use it with React components.

- **Heroku** The hardest part was hosting the project. NEXTJS has some major configuration issues with HEROKU but i eventually got it working.