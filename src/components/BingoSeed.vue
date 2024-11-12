<script setup lang="ts">
import { ref } from 'vue';

const seed = ref(0.98232731);
const isEditing = ref(false);

const toggleEdit = () => {
    isEditing.value = !isEditing.value
}

</script>


<template>
	<div class="container">
		<div class="seed">
            <div>Seed: </div>
            <div v-if="!isEditing" class="edit-seed-container">
				<div>{{ seed }}</div>
                <button @click="toggleEdit">Edit</button>
            </div>
            <div v-if="isEditing">
                <input :value="seed"/>
                <button @click="toggleEdit">✔</button>
            </div>
        </div>
		<div class="seed-input">
			<label>Set seed: </label>
			<input 
				type="number"
				placeholder="Enter your seed here"
			/>
			<button>✔</button>
		</div>
	</div>
</template>

<style>

.container {
	/* margin: 20px; */
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

input[type=number]{
    -moz-appearance: textfield;
}

</style>