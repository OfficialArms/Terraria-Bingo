<script setup lang="ts">
import { boardSize } from '@/global-state';
import BingoSeed from './BingoSeed.vue';

const updateBoardSize = (newSize: number) => {
  console.log('Calling updateBoardSize, Value is: ', newSize);
  boardSize.value = newSize;
};
</script>

<!-- TODO: Make it so there is a tool tip at the bottom based on hovered element -->

<template>
  <div class="dialog-container">
    <div class="settings-content">
      <BingoSeed />
    </div>
    <div class="size-container">
      <button @click="updateBoardSize(3)">small</button>
      <button @click="updateBoardSize(4)">medium</button>
      <button @click="updateBoardSize(5)">large</button>
    </div>
    <div class="size-container">
      <button>Journey</button>
      <button>Classic</button>
      <button>Expert</button>
      <button>Master</button>
    </div>
  </div>
</template>

<style>
.dialog-container {
  display: flex;
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
  min-width: 50vw;
}

.settings-content {
  /* padding: 30px; */
  height: 100%;
  overflow: auto;
}

.size-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
