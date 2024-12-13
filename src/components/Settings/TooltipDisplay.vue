<script setup lang="ts">

const props = defineProps<{
  tooltip: string;
}>();

</script>

<template>
  <p class="tooltip-text">
    {{props.tooltip}}
  </p>
</template>

<style>

.tooltip-text {
  text-align: center;
  background-image: url('../../images/TooltipBackground.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
  margin: 0;
  padding: 30px 0;
  height: 100%;
}
</style>
