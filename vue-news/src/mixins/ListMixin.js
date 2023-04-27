import bus from "@/utils/bus";

export default {
  // 재사용할 인스턴스(컴포넌트) 옵션들
  // created() {
  //   bus.$emit('start:spinner');
  //   this.$store.dispatch('FETCH_LIST', this.$route.path)
  //   .then(() => {
  //     console.log('mixins 호출')
  //   })
  //   .catch((err) => console.log(err));
  // },
  mounted() {
    bus.$emit('end:spinner')
  },
}