<script setup lang="ts">
import { ref, watch } from 'vue';
import BingoBoard from './components/BingoBoard.vue';
import BingoHeader from './components/BingoHeader.vue';
import BingoSettings from './components/Settings/BingoSettings.vue';
import { bingoTiles, boardSize, currentRandomSeed } from './global-state';
import { randomizeSeed } from './util/randomization';
import { ALL_BINGO_TILES } from './util/config';
import SettingsButton from './components/Settings/SettingsButton.vue';

const isDialogOpen = ref(false);

const toggleSettings = () => {
  isDialogOpen.value = !isDialogOpen.value;
};

// Update how many tiles are used when the board size changes
watch(boardSize, () => {
  bingoTiles.value = ALL_BINGO_TILES.slice(0, boardSize.value * boardSize.value);
});
</script>

<!-- // TODO: make is so that you can close the menu by clicking outside the modal -->

<template>
  <div class="bingo-page">
    <BingoHeader class="header" />
    <div class="bingo-content">
      <div class="settings-area">
        <div class="seed-container">
          <p class="seed-text">Seed: {{ currentRandomSeed }}</p>
          <img class="random-button" src="./images/RandomDieIcon.png" @click="randomizeSeed" />
        </div>
        <SettingsButton class="settings-button" :onclick="toggleSettings" />
      </div>
      <BingoSettings v-if="isDialogOpen" />
      <BingoBoard class="bingo-board" :size="boardSize" :bingo-tiles="bingoTiles" />
    </div>
  </div>
</template>

<style scoped>
.bingo-content {
  height: 100%;
  margin: 50px;
  margin-top: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.bingo-board {
  height: 95%;
}

.bingo-settings-button {
  display: flex;
  justify-content: right;
}

.bingo-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url('/src/images/background.png');
  background-size: cover;
  color: white;
}

.header {
  display: flex;
  justify-content: center;
}

.seed-container {
  display: flex;
  flex-direction: row;
}

.seed-text {
  margin: 0 0 0 6px;
}

.settings-area {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5%
}

.settings-button {
  margin-right: 6px;
}

.random-button {
  image-rendering: pixelated;
  display: block;
  margin: 0;
  cursor: pointer;
}
</style>
