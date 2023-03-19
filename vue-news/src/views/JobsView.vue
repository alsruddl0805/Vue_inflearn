<template>
          <div>
            <ul>
              <li v-for="item in jobsList" :key="item.id">{{ item.title }}</li>
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