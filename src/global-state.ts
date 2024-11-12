import { ref } from 'vue';
import json from "./tile-data.json";
import { shuffle } from './useful-funcitons';

const allBingoTiles = json.tasks;

// state declared here will be shared
export const boardSize = ref(4);
export const currentRandomSeed = ref(Math.random());
export const bingoTiles = ref(allBingoTiles.slice(0, boardSize.value*boardSize.value));

export function useComposable() {

    const setBoardSize = (newSize: number) => { boardSize.value = newSize; }
    const setCurrentRandomSeed = (newSeed: number) => { currentRandomSeed.value = newSeed}

    const randomizeList = () => shuffle(allBingoTiles, currentRandomSeed.value);

    // Setters and getters for both
    // can be defined here

    return {
        currentRandomSeed,
        boardSize,
        randomizeList,
        setBoardSize,
        setCurrentRandomSeed
    };
}
