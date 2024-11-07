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

.bingo-header { 
    grid-area: 1 / 1 / 2 / 6;
}

.header-text {
    font-weight: 500;
    font-size: 2.6rem;
    text-align: center;
}


</style>
