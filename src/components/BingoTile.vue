<script setup lang="ts">
import { computed, ref } from 'vue';

defineProps<{
  msg: string,
  difficulty: number
}>()

const stateToColourList = ["blank-tile","collected-tile","taken-tile"]
const tileState = ref(0);

const updateState = () => {
    tileState.value = (tileState.value+1) % stateToColourList.length;
}

// Function to reset the `tileState` to "blank-tile" on right-click
const resetState = (event: Event) => {
  event.preventDefault(); // Prevent default right-click menu
  tileState.value = 0;
};

const tileClass = computed(() => stateToColourList[tileState.value]);

</script>

<template>
  <button class="tile" :class="tileClass" @click="updateState" @contextmenu.prevent="resetState">
    <p>{{ msg }}</p>
  </button>
</template>

<style scoped>

.tile {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.blank-tile {
    background-color: white;
}

.collected-tile {
    background-color: limegreen;
}

.taken-tile {
    background-color: red;
}

</style>
