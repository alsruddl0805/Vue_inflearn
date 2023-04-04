<template>
  <div class="home">
    <section class="header-container">
      <div class="user-container">
        <div>
          <i class="fas fa-user-circle"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedAskInfo.user}`">{{ fetchedAskInfo.user }}</router-link>
          <div class="time">{{ fetchedAskInfo.time_ago }}</div>
        </div>
      </div>
    </section>
    <section>
      <div v-html="fetchedAskInfo.content" class="content"></div>
    </section>
    <section>
      <h3>Comments</h3>
      <div v-for="item in fetchedAskInfo.comments" :key="item.id" class="content">
        <div class="user-container">
          <div>
            <i class="fas fa-user-circle"></i>
          </div>
          <div class="user-description">
            <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
            <div class="time">{{ item.time_ago }}</div>
          </div>
        </div>
        <div v-html="item.content"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "ItemVue",
  computed: {
    ...mapGetters(['fetchedAskInfo'])
  },
  created() {
    const askId = this.$route.params.id;
    this.$store.dispatch('FETCH_ASK_INFO', askId);
  },
}
</script>

<style scoped>
.home {
  padding: 0 1.8rem;
}
.header-container {
  padding-top: 1rem;
}
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>