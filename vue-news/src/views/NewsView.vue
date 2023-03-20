<template>
  <div>
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <a :href="item.url">{{ item.title }}</a> <br>
        <small>
          {{ item.time_ago }} by
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
      </li>
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