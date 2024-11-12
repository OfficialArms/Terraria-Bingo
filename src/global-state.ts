import { ref } from 'vue';
import json from "./tile-data.json";
import { shuffle } from './useful-functions';

const allBingoTiles = json.tasks;
const MAX_SEED = 999999999;

// state declared here will be shared
export const boardSize = ref(4);
export const currentRandomSeed = ref(Math.floor(Math.random()*MAX_SEED));
export const bingoTiles = ref(allBingoTiles.slice(0, boardSize.value*boardSize.value));

console.log("The Current Random Seed is:",currentRandomSeed.value);

export function useComposable() {

    const setBoardSize = (newSize: number) => { boardSize.value = newSize; }
    const setCurrentRandomSeed = (newSeed: number) => { currentRandomSeed.value = newSeed}

    const randomizeListWithSeed = (newSeed: number) => {
      setCurrentRandomSeed(newSeed);
      shuffle(allBingoTiles, currentRandomSeed.value)
    };

    const randomizeList = () => {
      randomizeListWithSeed(Math.floor(Math.random()*MAX_SEED));
    };

    return {
        currentRandomSeed,
        boardSize,
        randomizeList,
        randomizeListWithSeed,
        setBoardSize,
        setCurrentRandomSeed
    };
}
