<template>
    <div class="clearAllConatiner">
        <span class="clearAllBtn" @click="clearTodo">Clear all</span>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo: function() {
            this.$emit('clearTodo');
        },
    },
}
</script>

<style scoped>
.clearAllConatiner {width: 8.5rem; height: 50px; line-height: 50px; background-color: #fff; border-radius: 5px; margin: 0 auto;}
.clearAllBtn {display: block; color: #e20303;}
</style>