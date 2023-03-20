<template>
      <div>
        <ul>
          <li v-for="item in fetchedAsk" :key="item.id">
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link> <small>{{ item.time_ago }}</small>
          </li>
        </ul>
      </div>
</template>

<script>
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
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
      this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style></style>