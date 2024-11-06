<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <div class="parent">
        <div class="div1"> </div>
    </div>
</template>

<style scoped>
.parent {
    display: grid;
    grid-template-columns: 0.5fr repeat(3, 1fr) 0.5fr;
    grid-template-rows: repeat(4, 1fr) 0.5fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.div1 { grid-area: 2 / 2 / 5 / 5; }
</style>
