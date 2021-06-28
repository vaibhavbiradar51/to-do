<template>

  <div id="app">
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>To-Do List</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <todos-list />
    <todo-form />
    <h3>Completed: {{ completedTodos }}</h3>
    <h3>Not Completed: {{ pendingTodos }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TodosList from './components/TodosList'
import TodoForm from './components/TodoForm'
export default {
  name: 'app',
  components: {
    TodosList,
    TodoForm
  },
  computed: {
    ...mapGetters({
      completedTodos: 'completedTodos',
      pendingTodos: 'pendingTodos'
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
