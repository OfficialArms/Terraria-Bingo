<script setup lang="ts">

import BingoSeed from './BingoSeed.vue';


</script>


<template>
	<div class="dialog-container">
        <div class="settings-content">
            <BingoSeed />
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
    padding: 30px;
    height: 100%;
    overflow: auto;
}

</style>