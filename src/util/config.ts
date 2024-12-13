import json from '../tile-data.json';

export const ALL_BINGO_TILES = json.tasks;
export const DEFAULT_BOARD_SIZE = 4;
export const MAX_SEED = 999999999;

// Settings Menu Configurations:
//==============================

// Associated Images
import SmallSizeIcon from '../images/SmallSizeIcon.png';
import MediumSizeIcon from '../images/MediumSizeIcon.png';
import LargeSizeIcon from '../images/LargeSizeIcon.png';

export const SEED_BUTTON_TOOLTIP = "Copy your board's seed";
export const SEED_INPUT_TOOLTIP = "The DNA marker that define's your board's tiles";

export const SIZE_BUTTON_SETTINGS = {
  buttonAttributes: [
    {
      imageSource: SmallSizeIcon,
      textColor: "cyan",
      optionName: "Small",
      size: 3,
      tooltip: "3x3 Grid - Ideal for quick or single player games"
    }, {
      imageSource: MediumSizeIcon,
      textColor: "springgreen",
      optionName: "Medium",
      size: 4,
      tooltip: "4x4 Grid - Bigger and better for standard games with a friend"
    }, {
      imageSource: LargeSizeIcon,
      textColor: "lime",
      optionName: "Large",
      size: 5,
      tooltip: "5x5 Super-sized for long games, and multiple players"
    }],
  startingSelectedIndex: 1
};
