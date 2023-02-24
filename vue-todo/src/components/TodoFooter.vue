<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear all</span>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    methods: {
      ...mapMutations({
        clearTodo: 'clearAllItems'
      }),
    },
}
</script>

<style scoped>
.clearAllContainer {width: 8.5rem; height: 50px; line-height: 50px; background-color: #fff; border-radius: 5px; margin: 0 auto;}
.clearAllBtn {display: block; color: #e20303;}
</style>
