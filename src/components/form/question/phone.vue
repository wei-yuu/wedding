<template>
  <form-field question="你的電話？">
    <input
      v-model="modelValue"
      class="font-cursive w-2/3 border-b-2 pb-2 text-3xl outline-none focus:border-b-black"
      type="text"
      placeholder="請留下您的電話～"
    />
  </form-field>
</template>

<script setup lang="ts">
const modelValue = defineModel({ required: true });
</script>
