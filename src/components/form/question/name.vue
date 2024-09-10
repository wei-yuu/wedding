<template>
  <form-field question="你是誰！？" :disable-button="!modelValue">
    <input
      v-model="modelValue"
      class="w-2/3"
      type="text"
      placeholder="請留下您美麗的姓名～"
    />
  </form-field>
</template>

<script setup lang="ts">
const modelValue = defineModel({ required: true, default: '' });
</script>
