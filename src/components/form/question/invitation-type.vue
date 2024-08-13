<template>
  <form-field question="送給你的紅色💣">
    <ul class="font-cursive grid gap-4 text-4xl">
      <li v-for="(option, index) in options" :key="index">
        <input
          class="mr-2 h-5 w-5"
          type="radio"
          name="invitation"
          :id="option.id"
          :value="option.value"
          v-model="modelValue"
        />
        <label :for="option.id">{{ option.label }}</label>
        <transition
          enterActiveClass="transition-opacity ease duration-500"
          leaveActiveClass="transition-opacity ease duration-500"
          enterFromClass="opacity-0"
          enterToClass="opacity-100"
          leaveFromClass="opacity-100"
          leaveToClass="opacity-0"
        >
          <div v-show="modelValue === option.value" class="mt-3">
            <label for="address">{{ option.infoLabel }}</label>
            <input
              type="text"
              class="w-full border-b-2 border-black pb-2 outline-none"
            />
          </div>
        </transition>
      </li>
    </ul>
  </form-field>
</template>

<script setup lang="ts">
const modelValue = defineModel<string>();

const options = [
  {
    id: 'paper',
    value: '紙本',
    label: '我喜歡紙糊的，請寄給我～📮',
    infoLabel: '地址：',
  },
  {
    id: 'email',
    value: '電子',
    label: '獨愛 0 跟 1，請 mail 給我～📧',
    infoLabel: 'E-Mail：',
  },
];
</script>
