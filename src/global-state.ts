import { ref } from 'vue';
import json from "./tile-data.json";
import Chance from 'chance';

const allBingoTiles = json.tasks;
const MAX_SEED = 999999999;

// state declared here will be shared
export const boardSize = ref(4);
export const currentRandomSeed = ref(Math.floor(Math.random()*MAX_SEED));
export const bingoTiles = ref(allBingoTiles.slice(0, boardSize.value*boardSize.value));

export const setBoardSize = (newSize: number) => { boardSize.value = newSize; }
export const setCurrentRandomSeed = (newSeed: number) => { currentRandomSeed.value = newSeed}

export const randomizeListWithSeed = (newSeed: number) => {
  setCurrentRandomSeed(newSeed);
  const seededGenerator = new Chance(currentRandomSeed.value)
  const shuffledList = seededGenerator.shuffle(allBingoTiles)
  bingoTiles.value = shuffledList.slice(0, boardSize.value*boardSize.value)
};

export const randomizeList = () => {
  randomizeListWithSeed(Math.floor(Math.random()*MAX_SEED));
};
