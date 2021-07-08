<template>
    <div>
        <v-container>
            <v-text-field
            color="Black"
            type="input"
            filled
            clearable
            v-model="newItem"
            @keypress.enter="show">
            <template v-slot:append>
                <v-btn class="mx-2" fab dark color="indigo" @click="addNewTodoItem">
                  <v-icon dark>
                  mdi-plus
                  </v-icon>
                </v-btn>
            </template>
            </v-text-field>
        </v-container>
    </div>
</template>
<script>

export default {
  data () {
    return {
      newItem: ''
    }
  },
  methods: {
    addNewTodoItem () {
      this.$store.dispatch('addNewTodo', this.newItem)
      this.newItem = ''
    }
  },
  beforeMount () {
    this.$store.commit('getUnits')
  }
}
</script>
<style scoped>

</style>
