<template>
  <div>
    <ul class="news-list">
      <li v-for="item in newsList" :key="item.id" class="post">
        <div class="points">{{ item.points }}</div>
        <div>
          <p class="news-title">
            <a :href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
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

<style>
.news-list {margin: 0; padding: 0;}
.post {list-style: none; display: flex; align-items: center; border-bottom: 1px solid #eee;}
.points {width: 80px; height: 60px; display: flex; justify-content: center; align-items: center; color: #42b883;}
.news-title {margin: 0;}
.link-text {color: #828282;}
</style>