<script setup lang="ts">
import { ref } from 'vue';
import SettingsButtonIcon from '../../images/SettingsButtonicon.png';
import SettingsButtonIconHighlighted from '../../images/SettingsButtonIconHighlighted.png';

const settingsIcons = {
  onHover: SettingsButtonIconHighlighted,
  offHover: SettingsButtonIcon
};

const settingsSource = ref(settingsIcons.offHover);

const setSettingMouseHover = () => { settingsSource.value = settingsIcons.onHover; };
const setSettingMouseLeave = () => { settingsSource.value = settingsIcons.offHover; }


</script>

<template>
  <div>
    <img class="settings-button" v-bind:src="settingsSource" @mouseover="setSettingMouseHover"
      @mouseleave="setSettingMouseLeave" />
  </div>
</template>


<style scoped>
.settings-button {
  cursor: pointer;
  display: block;
}
</style>
