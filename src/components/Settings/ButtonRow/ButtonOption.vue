<script setup lang="ts">
interface Props {
  imageSource: string;
  isSelected?: boolean;
  textColor: string;
  onClick?: () => void;
  onHover?: () => void;
  optionName: string;
}

const {
  isSelected = false,
  onClick = () => console.log(`Button Option was clicked with no onClick`)
} = defineProps<Props>()
</script>

<template>
  <div class="button-container" :onclick="onClick">
    <div class="selected-container" :class="{ 'selected-background': isSelected }">
      <img class="option-image" v-bind:src="imageSource" />
      <div class="text-container">
        <p class="option-name" v-bind:style="{ color: `${textColor}` }">
          {{ optionName }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.option-name {
  display: flex;
  margin: 0;
}

.text-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-right: 5%;
}

.button-container {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  cursor: pointer;

  background-image: url("../../../images/ButtonBackground2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
}

.selected-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
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
  background: rgba(0, 0, 0, 0);
  border: none;
  font-size: 35px;
}
</style>
