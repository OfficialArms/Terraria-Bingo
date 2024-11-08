<script setup lang="ts">
defineProps<{
  msg: string,
  difficulty: number
}>()
</script>

<template>
  <div class="tile">
    <p>{{ msg }}</p>
  </div>
</template>

<style scoped>

.tile {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
