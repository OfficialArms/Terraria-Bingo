<script setup lang="ts">
import { ref } from 'vue';
import ButtonOption from './ButtonOption.vue';

interface Props {
  buttonAttributes: {
    imageSource: string;
    optionName: string;
    textColor: string;
    tooltip?: string; // May want to remove
  }[];
  onClickHandler: (index: number) => void;
  onHoverHandler: (index: number) => void;
  startingSelectedIndex?: number;
};

//TODO: NOTES FOR WHAT TO DO NEXT:
// I need to decide where the tooltip is assigned
// It can either be handled globally and these handle functions can modify the global state
// *** Or I can have them fire a function which takes in an index and the Settings Component maps
// it to the tooltip and modifies the tooltip's state with a ref instance property

const { startingSelectedIndex = 0, onClickHandler, onHoverHandler } = defineProps<Props>();

const selectedIndex = ref(startingSelectedIndex);

const onClickManager = (newSelectedIndex: number) => {
  //NOTE: I modified the code to use the functions from the prop but this still needs to be tested
  selectedIndex.value = newSelectedIndex;
  onClickHandler(newSelectedIndex)
}

const onHoverManager = (hoveredIndex: number) => {
  onHoverHandler(hoveredIndex);
}

const leaveHoverManager = () => {
  onHoverHandler(-1);
}

</script>

<template>
  <ButtonOption
    v-for="({ imageSource, textColor, optionName }, index) in buttonAttributes"
    :key="optionName"
    :imageSource
    :isSelected="index === selectedIndex"
    :textColor
    :onClick="() => onClickManager(index)"
    :optionName
    @hover="onHoverManager(index)"
    @mouseleave="leaveHoverManager()"
  />
</template>

<style></style>
