import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// storage 관련
const storage = {
  fetch() {
    let arr = [];
    if (localStorage.length > 0)  {
      let list = localStorage.length;
      for (let i = 0; i < list; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    title: 'TODO it !',
    todoItems: storage.fetch(),
  },
  getters: {
    storedTodoItem(state) {
      return state.todoItems;
    },
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.idx, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.idx].completed = !state.todoItems[payload.idx].completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  }
});
