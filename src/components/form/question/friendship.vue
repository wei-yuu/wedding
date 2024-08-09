<template>
  <form-field question="請問您是新郎 or 新娘的朋友呢？">
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
        <label class="grid cursor-pointer gap-2" :for="option.id">
          <img class="w-72" :src="option.image" :alt="option.id" />
          <p class="text-center font-dance text-lg">{{ option.caption }}</p>
        </label>
      </span>
    </template>
  </form-field>
</template>

<script setup lang="ts">
const modelValue = defineModel({ required: true });

const options = [
  {
    id: 'groom',
    value: '男方',
    image: '/test.jpg',
    caption: '帥氣的 Wilson！',
  },
  {
    id: 'bride',
    value: '女方',
    image: '/test.jpg',
    caption: '美麗的 Yura～',
  },
];
</script>
