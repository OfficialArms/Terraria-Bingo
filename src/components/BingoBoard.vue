<script setup lang="ts">
defineProps<{
  id: string,
  className: string
}>()
</script>

<template>
  <div :id="`${id}`" :class="{className}">
    <h1>This is a test</h1>
  </div>
</template>
