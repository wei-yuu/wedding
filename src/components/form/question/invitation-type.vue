<template>
  <form-field question="送給你的紅色💣" :disable-button="!modelValue.value">
    <ul class="font-cursive grid gap-4 text-4xl">
      <li v-for="(option, index) in options" :key="index">
        <input
          class="mr-2 h-5 w-5"
          type="radio"
          name="invitation"
          :id="option.id"
          :value="option.value"
          v-model="modelValue.value"
        />
        <label class="cursor-pointer" :for="option.id">
          {{ option.label }}
        </label>
        <transition
          enterActiveClass="transition-opacity ease duration-500"
          leaveActiveClass="transition-opacity ease duration-500"
          enterFromClass="opacity-0"
          enterToClass="opacity-100"
          leaveFromClass="opacity-100"
          leaveToClass="opacity-0"
        >
          <div v-show="modelValue.value === option.value" class="mt-3">
            <label class="cursor-pointer" :for="option.infoLabel">
              {{ option.infoLabel }}
            </label>
            <input
              :id="option.infoLabel"
              type="text"
              class="w-full"
              v-model="modelValue[option.infoKey as keyof typeof modelValue]"
            />
          </div>
        </transition>
      </li>
    </ul>
  </form-field>
</template>

<script setup lang="ts">
const modelValue = defineModel({
  required: true,
  default: {
    value: '',
    address: '',
    email: '',
  },
});

const options = [
  {
    id: 'paper',
    value: '紙本',
    label: '我喜歡紙糊的，請寄給我～📮',
    infoLabel: '地址：',
    infoKey: 'address',
  },
  {
    id: 'email',
    value: '電子',
    label: '獨愛 0 跟 1，請 mail 給我～📧',
    infoLabel: 'E-Mail：',
    infoKey: 'email',
  },
];
</script>
