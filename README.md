# Linkit TV

## The idea behind the project

The rise of [Reaction Content](https://en.wikipedia.org/wiki/Reaction_video) gave me a great idea. I decided to create an app where livestreamers could watch online videos together with their audience. A streamer can visit the site and share the generated URL with their fans. The Fans can send videos to be watched by the streamer. Think of it as an online TV screen where the remote can be shared with anyone on the internet.

## How it works

1. Open the LinkitTV site and start a new session. 

2. It Loads up an embedded youtube player

3. After loading the player it generates an URL link which you can share with anyone.

4. Visiting this URL opens a site which asks for youtube video URLs.

5. Link a youtube video URL to it.

6. The embedded player starts playing the linked youtube video

7. Any additional linked videos are added to a queue and autoplayed

## How i built it

React and Node were a natural choice for the frontend/backend since I am very comfortable with them.

I decided to use some Server side rendering with NEXTJS. This allowed me to conveniently combine the frontend and backend together. Rendering should also be faster because NEXTJS prerenders everything on the server. 

I also needed a way for real time bidirectional communication between the server and client, SOCKET.IO helped me achieve this. 

I also needed to choose an online video player. Youtube was the natural choice because of its popularity and massive video library. 

The hardest part was hosting the project. NEXTJS has some major compatibility issues with HEROKU but i eventually got it working.

