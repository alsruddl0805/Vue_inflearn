<template>
  <div>
    <ul>
      <li v-for="item in jobsList" :key="item.id">
        <a :href="item.url">{{ item.title }}</a> <br>
        <small>{{ item.time_ago }} by {{ item.user }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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