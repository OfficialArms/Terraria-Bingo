<script setup lang="ts">
import { ref } from 'vue';
import ButtonOption from './ButtonOption.vue';

interface Props {
  buttonAttributes: {
    imageSource: string;
    textColor: string;
    optionName: string;
  }[];
  onClickHandler: (index: number) => void;
  startingSelectedIndex?: number;
};

const { startingSelectedIndex = 0 } = defineProps<Props>();

const selectedIndex = ref(startingSelectedIndex);

const onClickManager = (newSelectedIndex: number, onClick: (index: number) => void) => {
  //TODO: Maybe remove parent handler as a parameter and
  selectedIndex.value = newSelectedIndex;
  Props.onClickHandler()
  onClick(newSelectedIndex);
}

const onHoverManager = (hoveredIndex: number, onHover: (index: number) => void) => {
  //TODO: Maybe remove parent handler as a parameter and
  selectedIndex.value = newSelectedIndex;
  onClick(newSelectedIndex);
}

</script>

<template>
  <ButtonOption
    v-for="({ imageSource, textColor, optionName }, index) in buttonAttributes"
    :key="optionName"
    :imageSource
    :isSelected="index === selectedIndex"
    :textColor
    :onClick="() => onClickManager(index, onClickHandler)"
    :optionName
  />
</template>

<style></style>
