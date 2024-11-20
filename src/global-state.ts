import { ref } from 'vue';
import { ALL_BINGO_TILES } from './util/config';
import { MAX_SEED, randomizeListWithSeed } from './util/randomization';

// state declared here will be shared
export const currentRandomSeed = ref(Math.floor(Math.random()*MAX_SEED));
export const bingoTiles = ref(randomizeListWithSeed(currentRandomSeed.value, ALL_BINGO_TILES).slice(0, boardSize.value*boardSize.value));

export const setBoardSize = (newSize: number) => { boardSize.value = newSize; }
export const setCurrentRandomSeed = (newSeed: number) => { currentRandomSeed.value = newSeed}
