<script setup lang="ts">
import { ref, watch } from 'vue';
import BingoBoard from './components/BingoBoard.vue';
import BingoHeader from './components/BingoHeader.vue';
import BingoSettings from './components/BingoSettings.vue';
import { bingoTiles, boardSize, currentRandomSeed } from './global-state';
import { randomizeSeed } from './util/randomization';
import { ALL_BINGO_TILES } from './util/config';
import SettingsButtonIcon from './images/SettingsButtonicon.png';
import SettingsButtonIconHighlighted from './images/SettingsButtonIconHighlighted.png';

const isDialogOpen = ref(false);

const toggleSettings = () => {
  isDialogOpen.value = !isDialogOpen.value;
};

// Update how many tiles are sent when the board size changes
watch(boardSize, () => {
  bingoTiles.value = ALL_BINGO_TILES.slice(0, boardSize.value * boardSize.value);
});

//TODO: MOVE THIS STUFF TO THEIR OWN COMPONENT

const settingsIcons = {
  onHover: SettingsButtonIconHighlighted,
  offHover: SettingsButtonIcon
};

const settingsSource = ref(settingsIcons.offHover);

const setSettingMouseHover = () => { settingsSource.value = settingsIcons.onHover; };
const setSettingMouseLeave = () => { settingsSource.value = settingsIcons.offHover; }

</script>

<!-- // TODO: make is so that you can close the menu by clicking outside the modal -->

<template>
  <div class="bingo-page">
    <BingoHeader msg="Terraria Bingo" />
    <div class="bingo-content">
      <div style="display: flex; flex-direction: row; justify-content: space-between">
        <div style="display: flex; flex-direction: row">
          <p>Seed: {{ currentRandomSeed }}</p>
          <img class="random-button" src="./images/RandomDieIcon.png" @click="randomizeSeed" />
        </div>
        <div class="bingo-settings-button">
          <img class="settings-button" v-bind:src="settingsSource" :onclick="toggleSettings"
            @mouseover="setSettingMouseHover" @mouseleave="setSettingMouseLeave" />
        </div>
      </div>
      <BingoSettings v-if="isDialogOpen" />
      <BingoBoard class="bingo-board-area" :size="boardSize" :bingo-tiles="bingoTiles" />
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

.random-button {
  image-rendering: pixelated;
  display: block;
  margin: auto;
  cursor: pointer;
}

.settings-button {
  cursor: pointer;
}
</style>
