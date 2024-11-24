<script setup lang="ts">
import { ref } from 'vue';
import BingoBoard from './components/BingoBoard.vue';
import BingoHeader from './components/BingoHeader.vue';
import BingoSettings from './components/BingoSettings.vue';
import { bingoTiles, boardSize, currentRandomSeed } from './global-state';
import { randomizeSeed } from './util/randomization';

const isDialogOpen = ref(false);
const newSeed = ref();

const openSettings = () => {
  isDialogOpen.value = true;
}

const updateSeed = () => {
  currentRandomSeed.value = newSeed.value;
};

</script>


<template>
  <div class="bingo-page">
    <BingoHeader msg="Terraria Bingo" />
    <div style="display: flex; flex-direction: row">
      <p>Seed: {{ currentRandomSeed }}</p>
      <button @click="randomizeSeed">🎲</button>
    </div>
    <div class="bingo-content">
      <div class="bingo-settings-button">
        <button :onclick="openSettings">Settings</button>
      </div>
    </div>
    <BingoSettings v-if="isDialogOpen"/>
    <div>
      <label>Set Seed</label>
      <input type="number" v-model.lazy="newSeed" :placeholder="'' + currentRandomSeed" />
      <button @click="updateSeed">Confirm</button>
    </div>
    <BingoBoard class="bingo-board-area" :size="boardSize" :bingo-tiles="bingoTiles" />
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
</style>
