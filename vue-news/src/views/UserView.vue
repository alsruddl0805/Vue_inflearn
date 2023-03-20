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
import { mapGetters } from 'vuex';

export default {
  name: "UserView",
  computed: {
    ...mapGetters({
      userInfo: 'fetchedUserInfo',
    })
  },
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_USER_INFO', userId);
  },
}
</script>

<style scoped>

</style>