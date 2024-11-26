<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div>
    <h1 class="header-text">{{ msg }}</h1>
  </div>
</template>

<style scoped>
.header-text {
  text-align: center;
  font-weight: 500;
  font-size: 2.6rem;
}
</style>
