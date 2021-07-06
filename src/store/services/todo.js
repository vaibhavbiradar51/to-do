import feathersVuex from 'feathers-vuex'
import feathersClient from 'feathers-client.js'

const { service } = feathersVuex(feathersClient, { idField: 'id' })
const servicePath = 'todo'

const servicePlugin = service(servicePath, {
  instanceDefaults: {
    id: null,
    title: '',
    completed: null
  }
})
feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
})

export default servicePlugin

console.log('todos service loaded')
