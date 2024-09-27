<template>
  <form-field question="請問您的飲食習慣？" :disable-button="!modelValue">
    <ul class="font-cursive grid gap-4 text-4xl">
      <li v-for="(option, index) in options" :key="index">
        <input
          class="mr-2 h-5 w-5"
          type="radio"
          name="eating"
          :id="option.id"
          :value="option.value"
          v-model="modelValue"
        />
        <label class="cursor-pointer" :for="option.id">
          {{ option.label }}
        </label>
      </li>
    </ul>
  </form-field>
</template>

<script setup lang="ts">
const modelValue = defineModel({ required: true, default: '' });

const options = [
  {
    id: 'carnivore',
    value: '葷',
    label: '無肉不歡，我需要大口吃肉🍖(葷食)',
  },
  {
    id: 'herbivore',
    value: '素',
    label: '養身健康，請多給我蔬菜🥬(素食)',
  },
];
</script>
