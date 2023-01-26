<template>
  <header>
    <h1>App Header {{ msg }}</h1>
    <button type="button" @click="sendEvent">emit send</button>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: ['msg'],
  methods: {
    sendEvent: function() {
      this.$emit('renew', '자식에서 보낸 data');
    },
  },
}
</script>

<style scoped>

</style>