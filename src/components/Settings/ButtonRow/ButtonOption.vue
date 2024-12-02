<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  imageSource: string;
  optionName: string;
  isSelected: boolean;
}>();

</script>

<template>
  <div class="container">
    <img class="option-image" v-bind:src="imageSource" />
    <p>{{ optionName }}</p>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: row;
}

.option-image {
  display: flex;
  object-fit: contain;
  image-rendering: pixelated;
}

.seed-input-container {
  width: 100%;
  display: flex;
  background-image: url("../../images/Text_Back.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
}

.seed-input {
  width: 100%;
  height: 100%;
  /* background-color: red; */
  background: rgba(0, 0, 0, 0);
  border: none;
  font-size: 35px;
}
</style>
