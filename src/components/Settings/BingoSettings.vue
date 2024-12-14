<script setup lang="ts">
import { boardSize, boardSizeSelected } from '@/global-state';
import BingoSeed from './BingoSeed.vue';
import { ref } from 'vue';
import ButtonGroup from './ButtonRow/ButtonGroup.vue';
import { SIZE_BUTTON_SETTINGS } from '@/util/config';
import TooltipDisplay from './TooltipDisplay.vue';

const DEFAULT_TOOL_TIP = "Please choose how you want to play with the options above";

const toolTipText = ref(DEFAULT_TOOL_TIP);

const boardSizeClickHandler = (index: number) => {
  const newBoardSize = SIZE_BUTTON_SETTINGS.buttonAttributes[index].size;
  boardSize.value = newBoardSize;
  boardSizeSelected.value = index;
};

const updateToolTip = (toolTip?: string) => {
  if (typeof toolTip === 'undefined') {
    toolTipText.value = DEFAULT_TOOL_TIP;
  } else {
    toolTipText.value = toolTip;
  }
};

</script>

<template>
  <div class="dialog-container">
    <BingoSeed :setHoverToolTip="updateToolTip" />
    <hr>
    <div style="display: flex; flex-direction: row; justify-content: space-between;">
      <ButtonGroup
        :buttonAttributes="SIZE_BUTTON_SETTINGS.buttonAttributes"
        :onClickHandler="boardSizeClickHandler"
        :onHoverHandler="updateToolTip"
        :startingSelectedIndex="boardSizeSelected"
      />
    </div>
    <hr>
    <TooltipDisplay :tooltip="toolTipText"/>
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
  background-color: #202a4afb;
  border-radius: 10px;
  top: 25%;
  max-width: 60vw;
  max-height: calc(80vh - 12.5vh - 25vh);
  min-height: 50vh;
  min-width: 50vw;
  padding: 15px;
}

.size-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
