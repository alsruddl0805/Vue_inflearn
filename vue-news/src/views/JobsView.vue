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
export default {
    data() {
        return {
            jobsList: [],
        }
    },
    created() {
      this.$store.dispatch('FETCH_JOBS');
      this.jobsList = this.$store.state.jobs;
    }
}
</script>

<style></style>