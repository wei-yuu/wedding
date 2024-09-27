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
          <p
            class="relative font-cursive text-center text-2xl rounded p-4"
            :class="{
              'active-line-groom':
                modelValue === option.value && option.value === '新郎',
              'active-line-bride':
                modelValue === option.value && option.value === '新娘',
            }"
          >
            {{ option.caption }}
          </p>
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

<style lang="scss" scoped>
.active-line-groom {
  @apply before:absolute before:border-2 before:border-blue before:top-0 before:left-0 before:bottom-0 before:right-0 before:animate-around;
  @apply after:absolute after:border-2 after:border-blue after:top-0 after:left-0 after:bottom-0 after:right-0 after:animate-around-delay;
}
.active-line-bride {
  @apply before:absolute before:border-2 before:border-pink before:top-0 before:left-0 before:bottom-0 before:right-0 before:animate-around;
  @apply after:absolute after:border-2 after:border-pink after:top-0 after:left-0 after:bottom-0 after:right-0 after:animate-around-delay;
}
</style>
