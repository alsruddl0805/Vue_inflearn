<template>
  <div id="app">
    <TodoHeader />
    <TodoInput />
    <TodoList />
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: { TodoHeader, TodoInput, TodoList, TodoFooter },
  name: 'app',
}
</script>

<style>
body {font-family: 'Gowun Dodum', sans-serif; background-color: #f6f6f6; text-align: center;}
#app {min-width: 300px;}
input {width: 200px; border-style: groove;}
button {border-style: groove;}
.shadow {box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);}
</style>
