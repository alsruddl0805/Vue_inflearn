<template>
  <div>
    <AppHeader :msg="str" @renew="renewString" />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';

export default {
  components: { AppHeader },
  data: function() {
    return {
      str: 'header',
    }
  },
  methods: {
    renewString: function(data) {
      this.str = data;
    },
  },
}
</script>

<style>

</style>
