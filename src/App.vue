<template>
  <div id="app">
    <AddTodo/>
    <FilterTodo/>
    <Todo/>
  </div>
</template>

<script>
import store from './store'
import Todo from './components/Todo.vue'
import AddTodo from './components/AddTodo.vue'
import FilterTodo from './components/FilterTodo.vue'

export default {
  name: 'app',
  store,
  components: {
    Todo,AddTodo,FilterTodo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1100px;
  margin: 60px auto;
}
h3{
  margin-top: 50px;
  margin: 0;
}
</style>

