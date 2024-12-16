<script setup lang="ts">
import { computed, ref } from 'vue';

defineProps<{
  msg: string,
  difficulty: number
}>()

const stateToColourList = ["blank-tile","collected-tile","taken-tile"]
const tileState = ref(0);

const updateState = () => {
  tileState.value = (tileState.value+1) % stateToColourList.length;
}

// Function to reset the `tileState` to "blank-tile" on right-click
const resetState = (event: Event) => {
  event.preventDefault(); // Prevent default right-click menu
  tileState.value = 0;
};

const tileClass = computed(() => stateToColourList[tileState.value]);

</script>

<template>
  <div class="tile" :class="tileClass" @click="updateState" @contextmenu.prevent="resetState">
    <p class="tile-text">{{ msg }}</p>
  </div>
</template>

<style scoped>

.tile {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: auto;
  margin: 6px;
  padding: 10px;
  word-wrap: break-word;
  border: 2px solid #272052;
  border-radius: 8px;
}

.tile-text {
  user-select: none;
  text-align: center;
  max-width: 100%;
  max-height: 100%;
}

.blank-tile {
  border-color: #272052;
  background-color: #3d3183bc;
}

.collected-tile {
  border-color: #18371b;
  background-color: #399131bc;
}

.taken-tile {
  border-color: #5d1d1c;
  background-color: #9b3432bc;
}

</style>
