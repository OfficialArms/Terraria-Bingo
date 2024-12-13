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
  /* display: flex;
  flex-direction: column;
  position: fixed;
  align-self: center;
  z-index: 100;
  background-color: #18043f;
  border-radius: 10px;
  top: 25%;
  max-width: 60vw;
  max-height: calc(80vh - 12.5vh - 25vh);
  min-height: 50vh;
  min-width: 50vw; */
}
</style>
