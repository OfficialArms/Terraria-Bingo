<script setup lang="ts">
import { currentRandomSeed } from '@/global-state';
import { ref } from 'vue';
import SeedIcon from '../../images/SeedIcon.png';
import SeedIconHighlighted from '../../images/SeedIconHighlighted.png';
import TextBackground from '../../images/TextBackground.png';
import TextBackgroundHighlighted from '../../images/TextBackgroundHighlighted.png';

const props = defineProps<{
  setHoverToolTip: (toolTip: string) => void;
}>();

const seedIcons = {
  onHover: SeedIconHighlighted,
  offHover: SeedIcon
};

const textBackgroundIcons = {
  onFocus: TextBackgroundHighlighted,
  offFocus: TextBackground
};

const seedSource = ref(seedIcons.offHover);
const textBackgroundSource = ref(textBackgroundIcons.offFocus);
const newSeed = ref(currentRandomSeed.value);
const isEditing = ref(false);

const setSeedMouseHover = () => { seedSource.value = seedIcons.onHover; };
const setSeedMouseLeave = () => { seedSource.value = seedIcons.offHover; };

const setInputHighlightOn = () => { textBackgroundSource.value = textBackgroundIcons.onFocus; };
const setInputHighlightOff = () => {
  if (!isEditing.value) {
    textBackgroundSource.value = textBackgroundIcons.offFocus;
  }
};

const editSeedHandler = () => {
  isEditing.value = true;
};

const stopEditingSeedHandler = () => {
  isEditing.value = false;
  setInputHighlightOff();
  currentRandomSeed.value = newSeed.value;
};

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === "Enter" || event.key === "Escape") {
    stopEditingSeedHandler();
    event.target.blur();
    console.log("THE type of the event is: ", event.type);
  }
};
</script>

<!-- TODO: Rename the classes. They're way too similar -->

<template>
  <div class="seed-container">
    <img class='seed-icon' v-bind:src="seedSource" @mouseover="setSeedMouseHover" @mouseleave="setSeedMouseLeave" />
    <div class="seed-input-container" @mouseover="setInputHighlightOn" @mouseleave="setInputHighlightOff"
      v-bind:style="{ 'background-image': 'url(' + textBackgroundSource + ')' }">
      <label class=" seed-label" for="seed-input">Seed: </label>
      <input id="seed-input" class="seed-input" @focus="editSeedHandler" @blur="stopEditingSeedHandler"
        @keyup="handleKeyPress" v-model="newSeed" />
    </div>
  </div>
</template>

<style>
.edit-seed-container {
  display: flex;
  flex-direction: row;
}

.seed-container {
  display: flex;
  width: 100%;
  font-size: 35px;
}

.seed-container-icon {
  cursor: pointer;
}

.seed-label {
  padding-left: 10px;
  padding-right: 10px;
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

.seed-input:focus {
  outline: none;
}

/* Remove the arrows on input field - Specific per browser types */

input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
