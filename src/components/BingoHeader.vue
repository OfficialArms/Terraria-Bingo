<script setup lang="ts">
defineProps<{
  msg: string,
  id: string,
  className: string
}>()
</script>

<template>
    <div :id="`${id}`">
        <h1 id="header-text" :class="{className}">{{ msg }}</h1>
        <div class="div1"> </div>
    </div>
</template>

<style scoped>
div {
  text-align: justify;
}

div:after {
  content: "";
  display: inline-block;
  width: 100%;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
</style>
