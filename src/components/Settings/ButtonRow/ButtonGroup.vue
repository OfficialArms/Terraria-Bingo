<script setup lang="ts">
import { ref } from 'vue';
import ButtonOption from './ButtonOption.vue';

interface Props {
  buttonAttributes: {
    imageSource: string;
    optionName: string;
    textColor: string;
    tooltip: string;
  }[];
  onClickHandler: (index: number) => void;
  onHoverHandler: (tooltip?: string) => void;
  startingSelectedIndex?: number;
};

const { buttonAttributes, onClickHandler, onHoverHandler, startingSelectedIndex = 0 } = defineProps<Props>();

const selectedIndex = ref(startingSelectedIndex);

const onClickManager = (newSelectedIndex: number) => {
  selectedIndex.value = newSelectedIndex;
  onClickHandler(newSelectedIndex)
}

const onHoverManager = (hoveredIndex: number) => {
  onHoverHandler(buttonAttributes[hoveredIndex].tooltip);
}

const leaveHoverManager = () => {
  onHoverHandler();
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
    @mouseover="onHoverManager(index)"
    @mouseleave="leaveHoverManager()"
  />
</template>

<style></style>
