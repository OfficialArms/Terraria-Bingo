import Chance from 'chance';
import { allBingoTiles, bingoTiles, boardSize, currentRandomSeed, setCurrentRandomSeed } from '@/global-state';
import { DEFAULT_BOARD_SIZE } from './config';

export const randomizeBoardWithSeed = (newSeed: number) => {
  setCurrentRandomSeed(newSeed);
  const seededGenerator = new Chance(currentRandomSeed.value)
  const shuffledList = seededGenerator.shuffle(allBingoTiles)
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
