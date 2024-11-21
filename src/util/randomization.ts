import Chance from 'chance';
import { bingoTiles, boardSize, currentRandomSeed } from '@/global-state';
import { ALL_BINGO_TILES, MAX_SEED } from './config';

export const getRandomSeed = () => {
  return Math.floor(Math.random() * MAX_SEED);
};

export const randomizeListWithSeed = <Type>(seed: number, list: Type[]) => {
  const seededGenerator = new Chance(seed);
  return seededGenerator.shuffle(list);
};

export const randomizeBoardWithSeed = (newSeed: number) => {
  const shuffledList = randomizeListWithSeed(newSeed, ALL_BINGO_TILES);
  bingoTiles.value = shuffledList.slice(0, boardSize.value * boardSize.value);
};

export const randomizeSeed = () => {
  currentRandomSeed.value = getRandomSeed();
};
