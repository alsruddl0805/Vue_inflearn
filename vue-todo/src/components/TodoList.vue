<template>
    <div>
      <ul>
        <li v-for="(item, idx) in todoItems" :key="item" class="shadow">
          {{ item }}
          <span class="removeBtn" @click="removeTodo(item, idx)">
            <i class="fa-solid fa-trash"></i>
          </span>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      todoItems: [],
    }
  },
  created: function() {
    if (localStorage.length > 0) {
      let list = localStorage.length;
      for (let i=0; i<list; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    removeTodo: function(item, idx) {
      localStorage.removeItem(item);
      this.todoItems.splice(idx, 1);
    },
  },
}
</script>

<style scoped>
ul {margin-top: 0; padding-left: 0; list-style-type: none; text-align: left;}
li {display: flex; height: 50px; min-height: 50px; line-height: 50px; margin: 0.5rem 0; padding: 0 0.9rem; background-color: #fff; border-radius: 5px;}
.removeBtn {margin-left: auto; color: #de4343; cursor: pointer;}
.chekBtn {margin-right: 5px; line-height: 45px; color: #62acde;}
.checkBtnCompleted {color: #b3adad;}
.textCompleted {text-decoration: line-through; color: #b3adad;}
</style>
