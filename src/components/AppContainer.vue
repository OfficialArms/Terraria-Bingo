<script setup lang="ts">
import BingoBoard from './BingoBoard.vue';
import BingoHeader from './BingoHeader.vue';
</script>

<template>
    <div class="parent-grid">
        <BingoHeader msg="This is the Terraria Bingo Zone™!"/>
        <BingoBoard :size="3"/>
    </div>
</template>

<style>
.parent-grid {
    display: grid;
    grid-template-columns: 0.5fr repeat(3, 1fr) 0.5fr;
    grid-template-rows: repeat(4, 1fr) 0.5fr;
}
</style>
