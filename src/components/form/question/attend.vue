<template>
  <form-field question="是否會出席？">
    <ul class="font-cursive grid gap-4 text-4xl">
      <li v-for="(option, index) in options" :key="index">
        <input
          class="mr-2 h-5 w-5"
          type="radio"
          name="attend"
          :id="option.id"
          :value="option.value"
          v-model="modelValue"
        />
        <label :for="option.id">{{ option.label }}</label>
      </li>
    </ul>
  </form-field>
</template>

<script setup lang="ts">
const modelValue = defineModel<string>();

const options = [
  {
    id: 'attend',
    value: '是',
    label: '肯定要的！我一定會出現！！🥳',
  },
  {
    id: 'gift',
    value: '禮到人不到',
    label: 'Sorry～禮到人不到，祝福你們🎁',
  },
  {
    id: 'regret',
    value: '否',
    label: '抱歉，那天無法出席，恭喜你們🎉',
  },
];
</script>
