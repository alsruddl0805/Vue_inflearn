<template>
  <div id="app">
    <button type="button" @click="loginUser1">login</button>
    <h1>List</h1>
    <div v-for="(item, idx) in list" :key="idx">{{ item }}</div>
  </div>
</template>

<script>
import axios from 'axios';
import { handleException } from './utils/handler';
export default {
  name: 'App',
  data() {
    return {
      list: [],
    }
  },
  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => {
        if (res.data.id === 1) {
          axios.get('https://jsonplaceholder.typicode.com/todos')
          .then(res => {
            console.log('사용자 인증 완료');
            this.list = res.data;
          })
          .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
    },

    async loginUser1() {
      try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if (response.data.id === 1) {
          console.log('사용자 인증 완료 1');
          let newList = await axios.get('https://jsonplaceholder.typicode.com/todos');
          this.list = newList.data;
        }
      } catch (err) {
        // 공통으로 발견되는 에러케이스
        handleException(err);
        console.log('try/catch : catch', err)
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
