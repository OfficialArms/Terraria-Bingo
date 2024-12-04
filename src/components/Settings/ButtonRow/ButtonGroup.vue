<script setup lang="ts">
import { ref } from 'vue';
import ButtonOption from './ButtonOption.vue';

interface Props {
  buttonAttributes: {
    imageSource: string;
    nameColor: string;
    optionName: string;
    onClicks: (index: number) => void;
  }[];
  startingSelectedIndex?: number;
};

const { startingSelectedIndex = 0 } = defineProps<Props>();

const selectedIndex = ref(startingSelectedIndex);

const onClickHandler = (newSelectedIndex: number, parentHandler: (index: number) => {}) => {
  //TODO: Maybe remove parent handler as a parameter and
  selectedIndex.value = newSelectedIndex;
  parentHandler(newSelectedIndex);
}


</script>

<template>
  <div v-for="(buttonAttribute, index) in buttonAttributes" v-bind:key="index">
    <ButtonGroup v-bind="buttonAttribute" />
  </div>
</template>

<style></style>
