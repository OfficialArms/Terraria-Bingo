import { ref } from 'vue';
import { ALL_BINGO_TILES, DEFAULT_BOARD_SIZE, MAX_SEED } from './util/config';
import { randomizeListWithSeed } from './util/randomization';

// state is declared here with default values from config file to be shared for any component to import
export const boardSize = ref(DEFAULT_BOARD_SIZE);
export const currentRandomSeed = ref(Math.floor(Math.random()*MAX_SEED));
export const bingoTiles = ref(randomizeListWithSeed(currentRandomSeed.value, ALL_BINGO_TILES).slice(0, boardSize.value*boardSize.value));
