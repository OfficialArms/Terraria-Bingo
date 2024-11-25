<script setup lang="ts">
import { currentRandomSeed } from '@/global-state'
import { ref } from 'vue'

const newSeed = ref(currentRandomSeed.value)
const isEditing = ref(false)

const clickEdit = () => {
  isEditing.value = true
}

const clickConfirm = () => {
  isEditing.value = false
  currentRandomSeed.value = newSeed.value
}
</script>

<template>
  <div class="container">
    <div class="seed">
      <div>Seed:</div>
      <div v-if="!isEditing" class="edit-seed-container">
        <div>{{ currentRandomSeed }}</div>
        <button @click="clickEdit">Edit</button>
      </div>
      <div v-else>
        <input v-model="newSeed" />
        <button @click="clickConfirm">✔</button>
      </div>
    </div>
    <div class="seed-input">
      <label>Set seed: </label>
      <input type="number" placeholder="Enter your seed here" />
      <button>✔</button>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
}

.container > div {
  padding: 10px 20px;
}

.edit-seed-container {
  display: flex;
  flex-direction: row;
}

.seed {
  display: flex;
}

.seed > div {
  font-size: 35px;
}

.seed-input > label {
  font-size: 35px;
}

.seed-input > input {
  padding: 10px;
  height: 35px;
  border-radius: 4px;
  resize: none;
}

.seed-input > button {
}

/* Remove the arrows on input field - Specific per browser types */

input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
