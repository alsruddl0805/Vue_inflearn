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
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      newsList: 'fetchedNewsList',
    })
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
}
</script>