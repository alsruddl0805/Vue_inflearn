<template>
  <div>
    <ul>
      <li v-for="item in newsList" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import { fetchNewsList } from '@/api';

export default {
  data() {
    return {
      newsList: [],
    }
  },
  created() {
    fetchNewsList()
    .then((res) => this.newsList = res.data)
    .catch()
  },
}
</script>

<style>

</style>