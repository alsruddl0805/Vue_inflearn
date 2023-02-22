<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">무언가를 입력하세요.</div>
      <div slot="footer">copyrights</div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem) {
        this.$store.commit('addOneItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },
  components: { Modal },
}
</script>

<style scoped>
  input:focus {outline: none;}
  .inputBox {height: 50px; line-height: 50px; background-color: #fff; border-radius: 5px;}
  .inputBox input {border-style: none; font-size: 0.9rem;}
  .addContainer {display: block; width: 3rem; background: linear-gradient(to right, #6478FB, #8763FB); float: right; border-radius: 0 5px 5px 0;}
  .addBtn {vertical-align: middle; color: #fff;}
</style>
