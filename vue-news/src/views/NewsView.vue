<template>
  <div>
    <ListItem :itemList="newsList"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListItem from '@/components/ListItem';

export default {
  components: { ListItem },
  computed: {
    ...mapGetters({
      newsList: 'fetchedNewsList',
    })
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
}
</script>