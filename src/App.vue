<script setup lang="ts">
import BingoBoard from './components/BingoBoard.vue';
import BingoHeader from './components/BingoHeader.vue';
import BingoSettings from './components/BingoSettings.vue';

import { ref } from 'vue';

const isDialogOpen = ref(false);

const openSettings = () => {
  isDialogOpen.value = true;
}
</script>


<template>
  <div class="bingo-page">
      <BingoHeader msg="This is the Terraria Bingo Zone™!"/>
      <div class="bingo-content">
        <div class="bingo-settings-button">
          <button :onclick="openSettings">Settings</button>
        </div>
        <BingoBoard :size="4"/>
      </div>
      <BingoSettings v-if="isDialogOpen"/>
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
  background-image: url("/src/images/background.png");
  background-size: cover;
  color: white;
}
</style>