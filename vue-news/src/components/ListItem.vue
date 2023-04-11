<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" :key="item.id" class="post">
        <div class="points">{{ item.points || 0}}</div>
        <div>
          <p class="news-title">
            <a :href="item.url" v-if="item.domain">{{ item.title }}</a>
            <router-link :to="`/item/${item.id}`" v-else>{{ item.title }}</router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`" class="link-text" v-if="item.user">{{ item.user }}</router-link>
            <a :href="item.url" v-else>{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  computed: {
    listItems() {
      return this.$store.state.list;
    }
  }
}
</script>

<style scoped>
.news-list {margin: 0; padding: 0;}
.post {list-style: none; display: flex; align-items: center; border-bottom: 1px solid #eee;}
.points {width: 80px; height: 60px; display: flex; justify-content: center; align-items: center; color: #42b883;}
.news-title {margin: 0;}
.link-text {color: #828282;}
</style>