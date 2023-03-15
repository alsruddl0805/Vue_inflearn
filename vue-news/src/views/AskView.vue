<template>
      <div>
        <ul>
          <li v-for="item in askList" :key="item.id">{{ item.title }}</li>
        </ul>
      </div>
</template>

<script>
import { fetchAskList } from '@/api';

export default {
    data() {
        return {
            askList: [],
        }
    },
    created() {
        fetchAskList()
        .then((res) => { this.askList = res.data })
        .catch()
    }
}
</script>

<style></style>