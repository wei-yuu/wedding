<template>
  <form-field
    question="是否需要幫您準備兒童座椅？"
    :disable-button="!modelValue.value"
  >
    <ul class="font-cursive grid gap-4 text-4xl">
      <li>
        <input
          class="mr-2 h-5 w-5"
          type="radio"
          name="child-seat"
          id="yes"
          value="是"
          v-model="modelValue.value"
        />
        <label class="cursor-pointer" for="yes">
          <span>需要！請幫我準備</span>
          <input
            type="number"
            min="1"
            class="w-16 text-center disabled:border-b-gray-400 disabled:text-gray-400"
            :disabled="modelValue.value !== '是'"
            v-model="modelValue.childSeatNumber"
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
          v-model="modelValue.value"
        />
        <label class="cursor-pointer" for="no">不用麻煩～趕🦀️！</label>
      </li>
    </ul>
  </form-field>
</template>
<script setup lang="ts">
const modelValue = defineModel({
  required: true,
  default: {
    value: '',
    childSeatNumber: undefined,
  },
});
</script>
