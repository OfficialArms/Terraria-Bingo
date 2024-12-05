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

export const SIZE_BUTTON_SETTINGS = {
  buttonAttributes: [
    {
      imageSource: SmallSizeIcon,
      textColor: "cyan",
      optionName: "Small",
      size: 3
    }, {
      imageSource: MediumSizeIcon,
      textColor: "springgreen",
      optionName: "Medium",
      size: 4
    }, {
      imageSource: LargeSizeIcon,
      textColor: "lime",
      optionName: "Large",
      size: 5
    }],
  startingSelectedIndex: 1
};
