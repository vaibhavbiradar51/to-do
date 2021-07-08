import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
const io = require('socket.io-client')

const host = 'https://todo-backend-bptzp623xa-uc.a.run.app'
const socket = io(host)

const feathersClient = feathers()
  .configure(socketio(socket))
  .configure(auth({ storage: window.localStorage }))

export default feathersClient
