<template>
  <div>
    <ul>
      <li v-for="item in news" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      news: [],
    }
  },
  created() {
    axios.get('https://api.hnpwa.com/v0/news/1.json')
    .then((res) => this.news = res.data)
    .catch()
  },
}
</script>

<style>

</style>