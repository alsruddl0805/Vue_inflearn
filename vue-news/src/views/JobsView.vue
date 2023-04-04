<template>
  <div>
    <ListItem :itemList="jobsList"/>
    <ul class="news-list">
      <li v-for="item in jobsList" :key="item.id" class="post">
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
import ListItem from '@/components/ListItem';

export default {
  components: { ListItem },
  computed: {
    ...mapGetters({
      jobsList: 'fetchedJobs',
    })
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>