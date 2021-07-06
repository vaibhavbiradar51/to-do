import Vue from 'vue'
import Vuex from 'vuex'
import feathersClient from '../feathers-client'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    todos: [
    ]
  },
  mutations: {
    NEW_TODO (state, todoItem) {
      feathersClient.service('todo').create({
        title: todoItem,
        completed: false
      }).then((result) => {
        state.todos.push({
          id: result._id,
          title: todoItem,
          completed: false
        })
        console.log(result)
        state.todoItem = ''
      }).catch((error) => {
        console.log(error)
      })
    },
    DELETE_TODO (state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
      feathersClient.service('todo').remove(id).then((result) => {
        console.log(result)
      }).catch((error) => {
        console.log(error)
      })
    },
    TOGGLE_TODO_STATUS (state, todoItem) {
      todoItem.completed = !todoItem.completed
      feathersClient.service('todo').update(todoItem.id, {
        title: todoItem.title,
        completed: todoItem.completed
      }).then((result) => {
        console.log(result)
      }).catch((error) => {
        console.log(error)
      })
    },
    getUnits: function (state) {
      state.todos = []
      var dbtodo = []
      feathersClient.service('todo').find().then((result) => {
        dbtodo = result
        console.log(dbtodo.data, 'tdfghj')
        for (let i = 0; i < dbtodo.data.length; i++) {
          const newTask = {
            id: dbtodo.data[i]._id,
            title: dbtodo.data[i].title,
            completed: dbtodo.data[i].completed
          }
          state.todos.push(newTask)
          console.log(state.todoItem)
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  actions: {
    addNewTodo ({ commit }, todoItem) {
      commit('NEW_TODO', todoItem)
    },
    deleteTodo ({ commit }, todoItem) {
      commit('DELETE_TODO', todoItem)
    },
    toggleTodoStatus ({ commit }, todoItem) {
      commit('TOGGLE_TODO_STATUS', todoItem)
    }
  },
  getters: {
    completedTodos (state) {
      return state.todos.filter(todo => {
        return todo.completed === true
      }).length
    },
    pendingTodos (state) {
      return state.todos.filter(todo => {
        return todo.completed === false
      }).length
    }
  }
})
