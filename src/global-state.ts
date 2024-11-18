import { ref } from 'vue';
import json from "./tile-data.json";
import { MAX_SEED, randomizeListWithSeed } from './utilities/randomization';

export const allBingoTiles = json.tasks;

// state declared here will be shared
export const boardSize = ref(4);
export const currentRandomSeed = ref(Math.floor(Math.random()*MAX_SEED));
export const bingoTiles = ref(randomizeListWithSeed(currentRandomSeed.value, allBingoTiles).slice(0, boardSize.value*boardSize.value));

export const setBoardSize = (newSize: number) => { boardSize.value = newSize; }
export const setCurrentRandomSeed = (newSeed: number) => { currentRandomSeed.value = newSeed}
