<script setup lang="ts">
import { boardSize } from '@/global-state';
import BingoSeed from './BingoSeed.vue';
import { ref } from 'vue';
import ButtonOption from './ButtonRow/ButtonOption.vue';

//TODO: REMOVE THIS!!
import SmallSizeIcon from '../../images/SmallSizeIcon.png';
import MediumSizeIcon from '../../images/MediumSizeIcon.png';
import LargeSizeIcon from '../../images/LargeSizeIcon.png';
import ButtonGroup from './ButtonRow/ButtonGroup.vue';

const DEFAULT_TOOL_TIP = "Please choose how you want to play with the options above";

const toolTipText = ref(DEFAULT_TOOL_TIP);

const clickHandler = (index: number, size: string) => console.log(`I'm ${size} and index number ${index}`);

//TODO: Move this to the config file
//TODO: Once this works try updating imageSources to the actual thing being imported
const SIZE_BUTTON_SETTINGS = ref({
  buttonAttributes: [
    {
      imageSource: SmallSizeIcon,
      nameColor: "cyan",
      onClick: (index: number) => clickHandler(index, "small"),
      optionName: "Small"
    }, {
      imageSource: MediumSizeIcon,
      nameColor: "springgreen",
      onClick: (index: number) => clickHandler(index, "medium"),
      optionName: "Medium"
    }, {
      imageSource: LargeSizeIcon,
      nameColor: "lime",
      onClick: (index: number) => clickHandler(index, "large"),
      optionName: "Large"
    }],
  startingSelectedIndex: 1
});



const updateToolTip = (toolTip: string) => {
  if (toolTip == "") {
    toolTipText.value = DEFAULT_TOOL_TIP;
  } else {
    toolTipText.value = toolTip;
  }
};

const updateBoardSize = (newSize: number) => {
  console.log('Calling updateBoardSize, Value is: ', newSize);
  boardSize.value = newSize;
};

const sayMyName = (name: string) => { console.log(`My name is ${name}`); };
</script>

<!-- TODO: Make it so there is a tool tip at the bottom based on hovered element -->

<template>
  <div class="dialog-container">
    <BingoSeed :setHoverToolTip="updateToolTip" />
    <hr>
    <div class="size-container">
      <button @click="updateBoardSize(3)">small</button>
      <button @click="updateBoardSize(4)">medium</button>
      <button @click="updateBoardSize(5)">large</button>
    </div>
    <hr>
    <div style="display: flex; flex-direction: row; justify-content: space-between;">
      <ButtonGroup
        :buttonAttributes="SIZE_BUTTON_SETTINGS.buttonAttributes"
        :startingSelectedIndex="SIZE_BUTTON_SETTINGS.startingSelectedIndex"
      />
    </div>
    <hr>
    <p style="text-align: center;">
      Put Tooltip Here
    </p>
  </div>
</template>

<style>
hr {
  width: 100%;
}

.dialog-container {
  display: flex;
  flex-direction: column;
  position: fixed;
  align-self: center;
  z-index: 100;
  background-color: #18043f;
  border-radius: 10px;
  top: 25%;
  max-width: 60vw;
  max-height: calc(80vh - 12.5vh - 25vh);
  min-height: 50vh;
  min-width: 50vw;
}



.size-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
