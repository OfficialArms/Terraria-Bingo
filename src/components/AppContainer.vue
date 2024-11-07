<script setup lang="ts">
import BingoBoard from './BingoBoard.vue';
import BingoHeader from './BingoHeader.vue';
</script>

<template>
    <div class="parent">
        <BingoHeader id="bingo-header" className="header" msg="This is the Terraria Bingo Zone™!"/>
        <BingoBoard id="bingo-board" className="parent"/>
    </div>
</template>

<style>
.parent {
    display: grid;
    grid-template-columns: 0.5fr repeat(3, 1fr) 0.5fr;
    grid-template-rows: repeat(4, 1fr) 0.5fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

#bingo-header { grid-area: 1 / 1 / 2 / 6; }
#bingo-board { grid-area: 2 / 2 / 5 / 5; }
</style>
