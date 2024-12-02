<script setup lang="ts">

const props = defineProps<{
  imageSource: string;
  optionName: string;
  isSelected: boolean;
}>();

</script>

<template>
  <div class="button-container">
    <div class="selected-container" :class="{ 'selected-background': isSelected }">
      <img class="option-image" v-bind:src="imageSource" />
      <p class="option-name">{{ optionName }}</p>
    </div>
  </div>
</template>

<style>
.option-name {
  display: flex;
  margin: 0;
}

.button-container {
  padding: 20px;
  display: flex;
  flex-direction: row;

  background-image: url("../../../images/ButtonBackground.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
}

.selected-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.selected-background {
  background-image: url('../../../images/ButtonBackgroundSelected.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
}

.option-image {
  display: flex;
  object-fit: none;
  image-rendering: pixelated;
  height: fit-content;
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
