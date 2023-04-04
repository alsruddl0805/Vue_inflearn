<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <router-link :to="`/user/${info.user}`">{{ info.user }}</router-link>
      <div class="time">{{ info.time_ago }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: [ 'info' ],
}
</script>

<style scoped>

</style>