import Chance from 'chance';
import { bingoTiles, boardSize, currentRandomSeed } from '@/global-state';
import { ALL_BINGO_TILES, MAX_SEED } from './config';

export const randomizeBoardWithSeed = (newSeed: number) => {
  currentRandomSeed.value = newSeed;
  const seededGenerator = new Chance(currentRandomSeed.value)
  const shuffledList = seededGenerator.shuffle(ALL_BINGO_TILES)
  bingoTiles.value = shuffledList.slice(0, boardSize.value*boardSize.value)
}

export const randomizeBoard = () => {
  randomizeBoardWithSeed(Math.floor(Math.random()*MAX_SEED));
}

export const randomizeListWithSeed = <Type>(seed: number, list: Type[]) => {
  const seededGenerator = new Chance(seed)
  return seededGenerator.shuffle(list);
};

export const randomizeList = <Type>(list: Type[]) =>{
  randomizeListWithSeed(Math.floor(Math.random()*MAX_SEED), list);
};
