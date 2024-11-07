<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <div class="bingo-header">
        <h1 class="header-text">{{ msg }}</h1>
    </div>
</template>

<style scoped>

.header-text {
    font-weight: 500;
    font-size: 2.6rem;
    text-align: center;
}


</style>
