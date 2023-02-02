<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: '',
    }
  },
  methods: {
    addTodo: function() {
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.clearInput();
    },
    clearInput: function() {
      this.newTodoItem = '';
    },
  }
}
</script>

<style scoped>
  input:focus {outline: none;}
  .inputBox {height: 50px; line-height: 50px; background-color: #fff; border-radius: 5px;}
  .inputBox input {border-style: none; font-size: 0.9rem;}
  .addContainer {display: block; width: 3rem; background: linear-gradient(to right, #6478FB, #8763FB); float: right; border-radius: 0 5px 5px 0;}
  .addBtn {vertical-align: middle; color: #fff;}
</style>
