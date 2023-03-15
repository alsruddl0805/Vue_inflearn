<template>
          <div>
            <ul>
              <li v-for="item in jobsList" :key="item.id">{{ item.title }}</li>
            </ul>
          </div>
</template>

<script>
import { fetchJobsList } from '@/api';

export default {
    data() {
        return {
            jobsList: [],
        }
    },
    created() {
        fetchJobsList()
        .then((res) => { this.jobsList = res.data })
        .catch()
    }
}
</script>

<style></style>