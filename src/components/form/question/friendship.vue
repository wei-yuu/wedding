<template>
  <form-field
    question="請問您是新郎 or 新娘的朋友呢？"
    :disable-button="!modelValue"
  >
    <template #content>
      <span v-for="(option, index) in options" :key="index">
        <input
          hidden
          type="radio"
          name="friendship"
          :id="option.id"
          :value="option.value"
          v-model="modelValue"
        />
        <label class="grid cursor-pointer gap-4" :for="option.id">
          <img
            class="w-72 rounded-3xl hover:shadow-xl"
            :src="option.image"
            :alt="option.id"
          />
          <p class="font-cursive text-center text-2xl">{{ option.caption }}</p>
        </label>
      </span>
    </template>
  </form-field>
</template>

<script setup lang="ts">
const modelValue = defineModel({ required: true, default: '' });

const options = [
  {
    id: 'bride',
    value: '新娘',
    image: '/bride.jpg',
    caption: '美麗的 Yura～',
  },
  {
    id: 'groom',
    value: '新郎',
    image: '/groom.jpg',
    caption: '帥氣的 Wilson！',
  },
];
</script>
