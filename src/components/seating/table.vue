<template>
  <div ref="tableChart" class="grid gap-2 place-content-center">
    <seating-message class="mb-4 text-center md:hidden" />
    <!-- Main table & Stage -->
    <div class="grid gap-4 place-content-center">
      <div
        class="w-64 h-16 flex justify-center items-center text-4xl border border-black"
      >
        活動舞台
      </div>
      <div
        class="flex flex-col justify-center items-center gap-1"
        :class="{
          'drop-shadow-[0px_0px_5px_#FD59CF]': focusTable === '主桌',
        }"
      >
        <div
          class="w-24 h-24 rounded-full border border-black"
          :class="{
            'bg-pink-300/30': focusTable === '主桌',
          }"
        />
        <p class="text-2xl">主桌</p>
      </div>
    </div>
    <!-- Tables -->
    <div class="grid grid-cols-3 gap-2 place-content-center grid-flow-dense">
      <div
        v-for="(table, index) in tables"
        :key="index"
        class="flex flex-col justify-center items-center gap-1"
        :class="[
          {
            'drop-shadow-[0px_0px_5px_#FD59CF]': focusTable === table.name,
            'row-span-4': table.column === 3,
            'row-span-5': table.column !== 3,
          },
          tablePosition(table.column, table.row),
        ]"
      >
        <div
          class="w-16 h-16 border border-black rounded-full"
          :class="{
            'bg-pink-300/30': focusTable === table.name,
          }"
        />
        <p class="text-xl">{{ table.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Table } from '@/types/seating.type';
import { ref } from 'vue';

defineProps<{
  tables: Table[];
  focusTable?: string;
}>();

const tableChart = ref<HTMLElement>();

const tablePosition = (column: number, row: number) => {
  if (column === 1) {
    switch (row) {
      case 1:
        return 'col-start-1 row-start-1';
      case 2:
        return 'col-start-1 row-start-6';
      case 3:
        return 'col-start-1 row-start-11';
      case 4:
        return 'col-start-1 row-start-[16]';
    }
  }
  if (column === 2) {
    switch (row) {
      case 1:
        return 'col-start-2 row-start-1';
      case 2:
        return 'col-start-2 row-start-6';
      case 3:
        return 'col-start-2 row-start-11';
      case 4:
        return 'col-start-2 row-start-[16]';
    }
  }
  if (column === 3) {
    switch (row) {
      case 1:
        return 'col-start-3 row-start-1';
      case 2:
        return 'col-start-3 row-start-5';
      case 3:
        return 'col-start-3 row-start-9';
      case 4:
        return 'col-start-3 row-start-[13]';
      case 5:
        return 'col-start-3 row-start-[17]';
    }
  }
};

const scrollIntoView = (options?: boolean | ScrollIntoViewOptions) => {
  tableChart.value?.scrollIntoView(options ?? { behavior: 'smooth' });
};

defineExpose({ scrollIntoView });
</script>
