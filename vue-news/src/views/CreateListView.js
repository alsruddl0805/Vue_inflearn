import ListView from '@/views/ListView';
import bus from '@/utils/bus';

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들
    // name: 'HOC component',
    name: name,
    created() {
      bus.$emit('start:spinner');
      this.$store.dispatch('FETCH_LIST', this.$route.path)
      .then(() => {
        console.log('HOC 호출')
        bus.$emit('end:spinner')
      })
      .catch((err) => console.log(err))
      // setTimeout(() => {
      // }, 3000);
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}