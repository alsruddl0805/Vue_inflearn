<template>
  <div>
    <ul>
      <li>name : {{ userInfo.id }}</li>
      <li>karma : {{ userInfo.karma }}</li>
      <li>created : {{ userInfo.created }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserView",
  data() {
    return {
      userInfo: '',
    }
  },
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_USER_INFO', userId)
    this.userInfo = this.$store.state.userInfo;
  },
}
</script>

<style scoped>

</style>