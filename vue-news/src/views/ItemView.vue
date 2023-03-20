<template>
  <div>{{ fetchedAskInfo }}</div>
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