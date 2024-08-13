<template>
  <form-field question="請問是否需要幫您準備兒童座椅？">
    <ul class="font-cursive grid w-1/2 gap-4 text-4xl">
      <li>
        <input
          class="mr-2 h-5 w-5"
          type="radio"
          name="child-seat"
          id="yes"
          value="是"
          v-model="modelValue"
        />
        <label for="yes">
          <span>需要！請幫我準備</span>
          <input
            type="number"
            min="1"
            class="w-16 border-b-2 border-b-black text-center outline-none disabled:border-b-gray-400 disabled:text-gray-400"
            :disabled="modelValue !== '是'"
          />
          <span>張</span>
        </label>
      </li>
      <li>
        <input
          class="mr-2 h-5 w-5"
          type="radio"
          name="child-seat"
          id="no"
          value="否"
          v-model="modelValue"
        />
        <label for="no">不用麻煩～趕🦀️！</label>
      </li>
    </ul>
  </form-field>
</template>
<script setup lang="ts">
const modelValue = defineModel<string>();
</script>
