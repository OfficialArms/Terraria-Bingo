<script setup lang="ts">
import AppContainer from './components/AppContainer.vue';
</script>

<template>
  <AppContainer />
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: block;
    text-align: center;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
