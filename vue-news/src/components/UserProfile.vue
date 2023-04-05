<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
<!--      <router-link :to="`/user/${info.user}`">{{ info.user }}</router-link>-->
<!--      <div class="time">{{ info.created }}</div>-->
      <slot name="username"></slot>
      <slot name="time"></slot>
      <slot name="karma"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: {
    info: Object
  },
}
</script>

<style scoped>

</style>