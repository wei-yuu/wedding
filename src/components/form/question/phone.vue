<template>
  <form-field question="你的電話？" :disable-button="!modelValue">
    <input
      v-model="modelValue"
      class="w-2/3"
      type="text"
      placeholder="請留下您的電話～"
    />
  </form-field>
</template>

<script setup lang="ts">
const modelValue = defineModel({ required: true, default: '' });
</script>
