<script setup lang="ts">
import { currentRandomSeed } from '@/global-state';
import { ref } from 'vue';
import SeedIcon from '../../images/SeedIcon.png';
import SeedIconHighlighted from '../../images/SeedIconHighlighted.png';

const props = defineProps<{
  setHoverToolTip: (toolTip: string) => void;
}>();

const seedIcons = {
  onHover: SeedIconHighlighted,
  offHover: SeedIcon
};

const seedSource = ref(seedIcons.offHover);

const setSeedMouseHover = () => { seedSource.value = seedIcons.onHover; };
const setSeedMouseLeave = () => { seedSource.value = seedIcons.offHover; };

const newSeed = ref(currentRandomSeed.value);
const isEditing = ref(false);

const editSeedHandler = () => {
  isEditing.value = true;
};

const stopEditingSeedHandler = () => {
  isEditing.value = false;
  currentRandomSeed.value = newSeed.value;
};
</script>

<!-- TODO: Rename the classes. They're way too similar -->

<template>
  <div class="seed">
    <img class='seed-icon' v-bind:src="seedSource" @mouseover="setSeedMouseHover" @mouseleave="setSeedMouseLeave" />
    <input class="seed-text-input" @focus="editSeedHandler" @blur="stopEditingSeedHandler"
      :value="'Seed: ' + currentRandomSeed" />

    <!-- <div v-if="!isEditing" class="edit-seed-container">
        <div>{{ "Seed: " + currentRandomSeed }}</div>
        <button @click="clickEdit">Edit</button>
      </div>
      <div v-else>
        <input v-model="newSeed" />
        <button @click="clickConfirm">✔</button>
      </div> -->
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: row;
}


.edit-seed-container {
  display: flex;
  flex-direction: row;
}

.seed {
  display: flex;
  width: 100%;
}

.seed>div {
  font-size: 35px;
}

.seed-icon {
  cursor: pointer;
}

.seed-input>label {
  font-size: 35px;
}

.seed-input>input {
  padding: 10px;
  height: 35px;
  border-radius: 4px;
  resize: none;
}

.seed-input>button {}

.seed-text-input {
  width: 100%;
  /* background-color: red; */
  background: rgba(0, 0, 0, 0);
  background-image: url("../../images/Text_Back.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  image-rendering: pixelated;
  border: none;

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
