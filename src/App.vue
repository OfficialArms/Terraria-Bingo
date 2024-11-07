<script setup lang="ts">
import BingoBoard from './components/BingoBoard.vue';
import BingoHeader from './components/BingoHeader.vue';
</script>

<template>
  <div class="parent-grid">
      <BingoHeader class="bingo-header-area" msg="This is the Terraria Bingo Zone™!"/>
      <BingoBoard class="bingo-board-area" :size="4"/>
  </div>
</template>

<style scoped>
.parent-grid {
    height: 100%;
    display: grid;
    grid-template-columns: 0.5fr repeat(3, 1fr) 0.5fr;
    grid-template-rows: repeat(4, 1fr) 0.5fr;
}

.bingo-header-area { 
    grid-area: 1 / 1 / 2 / 6;
}

.bingo-board-area { 
  grid-area: 2 / 2 / 5 / 5; 
  display: grid;
}
</style>