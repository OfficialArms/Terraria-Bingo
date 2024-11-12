<script setup lang="ts">
import BingoBoard from './components/BingoBoard.vue';
import BingoHeader from './components/BingoHeader.vue';
</script>

<template>
  <div class="parent-grid">
      <BingoHeader msg="This is the Terraria Bingo Zone™!"/>
      <BingoBoard :size="4"/>
  </div>
</template>

<style scoped>
.parent-grid {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("/src/images/background.png");
  background-size: cover;
  color: white;
}
</style>