<template>
  <div>
    <ul>
      <li v-for="item in newsList" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [],
    }
  },
  created() {
    this.$store.dispatch('FETCH_NEWS')
    this.newsList = this.$store.state.news;
  },
}
</script>

<style>

</style>