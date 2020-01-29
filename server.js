const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server);
const next = require('next')

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
nextApp.getRequestHandler()
const nextHandler = nextApp.getRequestHandler();

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()//

const port = parseInt(process.env.PORT, 10) || 3000//

let index = 0;
let activeSessions= [

];

app.get('/test', (req,res) => {
  console.log(activeSessions)
  const allThesockets = Object.keys(io.sockets.sockets)
  res.json({sessions : activeSessions, socketClients : allThesockets})
})

app.post('/createsession', jsonParser, (req, res) => { // creates a new session
  const { name } = req.body;
  let session = activeSessions.find(o => o.name.toLowerCase() === name.toLowerCase()); // searches for active session with that name

  if (session === undefined || session === null) { // creates a new session
    console.log("session created")
    //createSocket(req.params.name);
    activeSessions.push({
      name : name.toLowerCase(),
      password : "secret",
      suggestedvideos : []
    })
    console.log(activeSessions, "ACTIVE SESSION SEEN HERE")
    res.status(200)
    res.json(`${req.params.name} created`)
  }
  else { // session name already taken
    console.log("sessionn already exists")
    res.status(400)
    res.json("name is taken, it already exists")
  }
})


  app.post('/suggestvideo', jsonParser, (req, res) => { // emit a video to the user
      const {videoUrl, videoName, postId} = req.body
      console.log(postId)
      const session = activeSessions.find(s => {
        return s.name === postId
      })
      console.log("this is what your looking for", session);
      if (session === undefined) {
        res.status(404).json("not found")
      }
      else {
      //this.socket.emit('link message', msg)
      console.log(`${postId} video`)
      io.emit(`${postId} video`, {videoName : videoName, videoUrl : videoUrl});
      res.status(200).json("data received and handled")
      }


  })

  app.get('/suggest/:id', (req, res) => {
    //activeSessions.find(req.params.id)
    console.log("here is the current sessions", activeSessions)
    console.log(req.params.id, "HERERE PARAMS HERE")
    let session = activeSessions.find(o => o.name === req.params.id);
    console.log(session)
    if (session === undefined){ // push an new session on to it with these values
      return nextApp.render(req, res, '/notFound', { id: req.params.id })
    }
    else {
      return nextApp.render(req, res, '/suggest', { id: req.params.id })
    }
  })

  io.on('connection', socket => {
    console.log("socket id is this : ", socket.id)
    activeSessions[index].socketId = socket.id
    index++;
    console.log("user has connected to")
    var userId;
    socket.on('disconnect', () => {
      console.log("disconnect id is here", socket.id)
      activeSessions = activeSessions.filter(s => {
        return s.socketId !== socket.id
      })
      index--;
      console.log(activeSessions, "NEW ACTIVE SESSIONS ARE HERE")
      

      //console.log("the session to be closed is this one", closedSession);
    })
  })


nextApp.prepare().then(() => {


  
  app.get('*', (req, res) => {
    return nextHandler(req, res);
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})




/*    io.on('connect', socket  => { // emit to the user that is selected
      socket.on('disconnect', function(){
        console.log('user disconnected')
      });
      socket.emit('now', {
        message : req.body.videoUrl
      })
      const createSocket = (name) => {
  console.log("creating a room with ", name)
  const nsp = io.of(`/${name}`);
  nsp.on('connection', function(socket) {
    console.log("someone connected to the custom namespace")
    const roomCreatorId = Object.keys(io.of(`/${name}`).clients().sockets)[0] // Get the id of the first one who joined/created the room
    activeSessions.find(o => o.name.toLowerCase() === name.toLowerCase()).id = roomCreatorId // setup the id of roomcreator
    socket.on('link message', function(msg) { // add a listener to listen for link messages sent
      console.log("message was sent from user")
      console.log(msg)
      nsp.emit('link message', msg);
    })
    socket.on('disconnect', function() { // if the first person who joined the room leaves, delete it from active sessions
      console.log("user disconnected from room", name)
      var clients = io.of(`/${name}`).clients().sockets; // all users from room `room`
      console.log() // first guy is the one who created the room
      activeSessions =  removeActiveSession(Object.keys(clients)[0])
      nsp.emit("disconnect message")
    })
  })
}
const removeActiveSession = (sessionToRemove) => { // filters the active sessions and removes 
  return activeSessions.filter(ses => ses.id === sessionToRemove);
}

      */
    /*
io.on('connection', function(socket) {
  console.log("user has connected")
  socket.on('chat message', function(msg) {
    console.log("message: ", msg)
    io.emit('link message', msg)
  })


  socket.on('disconnect', function() {
    console.log("user disconnected")
  })
})
*/

module.exports = {
  activeSessions : activeSessions
}