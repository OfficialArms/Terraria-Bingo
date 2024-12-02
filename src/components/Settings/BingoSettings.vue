<script setup lang="ts">
import { boardSize } from '@/global-state';
import BingoSeed from './BingoSeed.vue';
import { ref } from 'vue';

const DEFAULT_TOOL_TIP = "Please choose how you want to play with the options above";

const toolTipText = ref(DEFAULT_TOOL_TIP);

const updateToolTip = (toolTip: string) => {
  if (toolTip == "") {
    toolTipText.value = DEFAULT_TOOL_TIP;
  } else {
    toolTipText.value = toolTip;
  }
};

const updateBoardSize = (newSize: number) => {
  console.log('Calling updateBoardSize, Value is: ', newSize);
  boardSize.value = newSize;
};
</script>

<!-- TODO: Make it so there is a tool tip at the bottom based on hovered element -->

<template>
  <div class="dialog-container">
    <BingoSeed :setHoverToolTip="updateToolTip" />
    <hr style="width: 100%;">
    <div class="size-container">
      <button @click="updateBoardSize(3)">small</button>
      <button @click="updateBoardSize(4)">medium</button>
      <button @click="updateBoardSize(5)">large</button>
    </div>
    <hr style="width: 100%;">
    <div class="size-container">
      <button>Journey</button>
      <button>Classic</button>
      <button>Expert</button>
      <button>Master</button>
    </div>
    <hr style="width: 100%;">
    <p style="text-align: center;">
      Put Tooltip Here
    </p>
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



.size-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
