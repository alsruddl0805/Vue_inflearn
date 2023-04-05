<template>
  <div>
    <ListItem :itemList="fetchedAsk"/>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import ListItem from '@/components/ListItem';
import bus from "@/utils/bus";

export default {
  components: { ListItem },
    computed: {
      // #3
      // 스토어 getters의 이름을 바로 쓰고 싶다면 배열로
      ...mapGetters([
        'fetchedAsk',
      ])
      // ...mapGetters({
      //   원하는 변수명: '스토어 getters의 함수명'
      // })

      // #2
      // ...mapState({
      //   askList: state => state.ask,
      // })

      // #1
      // askList() {
      //   return this.$store.state.ask;
      // },
    },
    created() {
      bus.$emit('start:spinner');
      setTimeout(() => {
        this.$store.dispatch('FETCH_ASK')
        .then(() => bus.$emit('end:spinner'))
        .catch((err) => console.log(err))
      }, 3000);
    }
}
</script>