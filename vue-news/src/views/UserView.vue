<template>
  <UserProfile :info="userInfo">
    <template v-slot:username>{{ userInfo.id }}</template>
    <template v-slot:time>{{ userInfo.created }}</template>
    <template v-slot:karma>{{ userInfo.karma }}</template>
  </UserProfile>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '@/components/UserProfile';

export default {
  name: "UserView",
  components: { UserProfile },
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