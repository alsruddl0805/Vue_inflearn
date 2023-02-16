<template>
    <div>
      <transition-group name="list" tag="ul">
        <li v-for="(todoItem, idx) in todoItems" :key="idx" class="shadow">
          <i class="checkBtn fa-solid fa-check" @click="toggleComplete(todoItem, idx)" :class="{checkBtnCompleted : todoItem.completed}"></i>
          <span :class="{textCompleted : todoItem.completed}">{{ todoItem.item }}</span>
          <span class="removeBtn" @click="removeTodo(todoItem, idx)">
            <i class="fa-solid fa-trash"></i>
          </span>
        </li>
      </transition-group>
    </div>
</template>

<script>
export default {
  props: ['todoItems'],
  methods: {
    removeTodo(todoItem, idx) {
      this.$emit('removeItem', todoItem, idx);
    },
    toggleComplete(todoItem, idx) {
      this.$emit('toggleItem', todoItem, idx);
    },
  },
}
</script>

<style scoped>
ul {margin-top: 0; padding-left: 0; list-style-type: none; text-align: left;}
li {display: flex; height: 50px; min-height: 50px; line-height: 50px; margin: 0.5rem 0; padding: 0 0.9rem; background-color: #fff; border-radius: 5px;}
.removeBtn {margin-left: auto; color: #de4343; cursor: pointer;}
.checkBtn {margin-right: 5px; line-height: 45px; color: #62acde;}
.checkBtnCompleted {color: #b3adad;}
.textCompleted {text-decoration: line-through; color: #b3adad;}

/* list item transition */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}

.list-enter,
.list-leave-to

/* .list-leave-active below version 2.1.8 */
  {
  opacity: 0;
  transform: translateY(30px);
}
</style>
