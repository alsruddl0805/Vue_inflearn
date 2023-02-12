<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @addTodoItem="addOneItem"/>
    <TodoList :todoItems="todoItems" @removeItem="removeOneItem"/>
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'app',
  data: function() {
    return {
      todoItems: [],
    }
  },
  // 리팩토링 : 데이터를 한 곳에서 관리
  created: function () {
    if (localStorage.length > 0) {
      let list = localStorage.length;
      for (let i = 0; i < list; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  methods: {
    addOneItem: function (todoItem) {
      let obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function (todoItem, idx) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(idx, 1);
    },
  },
  components: { TodoHeader, TodoInput, TodoList, TodoFooter },
}
</script>

<style>
body {font-family: 'Gowun Dodum', sans-serif; background-color: #f6f6f6; text-align: center;}
#app {min-width: 300px;}
input {width: 200px; border-style: groove;}
button {border-style: groove;}
.shadow {box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);}
</style>
