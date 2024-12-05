<script setup lang="ts">
import { ref } from 'vue';
import ButtonOption from './ButtonOption.vue';

interface Props {
  buttonAttributes: {
    imageSource: string;
    nameColor: string;
    onClick: (index: number) => void;
    optionName: string;
  }[];
  startingSelectedIndex?: number;
};

const { startingSelectedIndex = 0 } = defineProps<Props>();

const selectedIndex = ref(startingSelectedIndex);

const onClickManager = (newSelectedIndex: number, onClick: (index: number) => void) => {
  //TODO: Maybe remove parent handler as a parameter and
  selectedIndex.value = newSelectedIndex;
  onClick(newSelectedIndex);
}

</script>

<template>
  <ButtonOption
    v-for="({ imageSource, nameColor, onClick, optionName }, index) in buttonAttributes"
    :key="optionName"
    :imageSource
    :isSelected="index === selectedIndex"
    :nameColor
    :onClick="() => onClickManager(index, onClick)"
    :optionName
  />
</template>

<style></style>
