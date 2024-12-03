<script setup lang="ts">
import { currentRandomSeed } from '@/global-state';
import { ref, watch } from 'vue';
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

const setSeedMouseHover = () => {
  props.setHoverToolTip("Copy your seed to clipboard");
  seedSource.value = seedIcons.onHover;
};
const setSeedMouseLeave = () => {
  props.setHoverToolTip("");
  seedSource.value = seedIcons.offHover;
};

const setInputHighlightOn = () => {
  props.setHoverToolTip(" ");
  textBackgroundSource.value = textBackgroundIcons.onFocus;
};
const setInputHighlightOff = () => {
  props.setHoverToolTip("");
  if (!isEditing.value) {
    textBackgroundSource.value = textBackgroundIcons.offFocus;
  }
};

const copySeed = () => {
  navigator.clipboard.writeText(`${currentRandomSeed.value}`);
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
    // @ts-expect-error ---
    event.target.blur();
  }
};

// Update the seed being displayed if the seed gets randomized
watch(currentRandomSeed, () => {
  newSeed.value = currentRandomSeed.value;
});

</script>

<template>
  <div class="seed-container">
    <img class='seed-icon' v-bind:src="seedSource" @mouseover="setSeedMouseHover" @mouseleave="setSeedMouseLeave"
      @click="copySeed" />
    <div class="seed-input-container" @mouseover="setInputHighlightOn" @mouseleave="setInputHighlightOff"
      v-bind:style="{ 'background-image': 'url(' + textBackgroundSource + ')' }">
      <label class="seed-label" for="seed-input">Seed: </label>
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
  align-items: center;
  font-size: 35px;
}

.seed-icon {
  cursor: pointer;
}

.seed-label {
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
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
  color: white;
  background: rgba(0, 0, 0, 0);
  border: none;
  font-size: 35px;
}

.seed-input:focus {
  outline: none;
  cursor: text;
}

.seed-input:not(:focus) {
  cursor: pointer;
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
