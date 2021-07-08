<template>
  <div style="width:250px; margin:5px auto;">
    <div style="display:flex; justify-content:space-between">
    <v-checkbox
      :input-value="todo.completed"
      class="{completed: todo.completed}"
      @click="toggleTodoStatus(todo)"
      :label="`${ todo.title }`"
    ></v-checkbox>
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary"
      @click="removeTodo(todo.id)"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['todo'],
  methods: {
    ...mapActions({
      removeTodo: 'deleteTodo',
      toggleTodoStatus: 'toggleTodoStatus'
    })
    }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.completed{
  text-decoration: line-through;
}
</style>
