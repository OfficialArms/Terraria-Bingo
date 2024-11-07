<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <div class="bingo-header-container">
        <h1 class="header-text">{{ msg }}</h1>
    </div>
</template>

<style scoped>

.header-text {
    font-weight: 500;
    font-size: 2.6rem;
}

/* Sets the container to flexbox and ensures it's centered vertically and horizontally */
.bingo-header-container {
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>
