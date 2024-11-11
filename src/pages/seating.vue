<template>
  <div
    v-if="tables.length"
    ref="page"
    class="w-full md:flex grid justify-center gap-16 grid-cols-1 px-4"
  >
    <!-- Table -->
    <seating-table
      ref="tableChart"
      :tables="tables"
      :focusTable="seat?.table"
    />
    <!-- Search -->
    <seating-query class="row-start-1 md:row-start-auto" @click="querySeat" />
  </div>
</template>

<script setup lang="ts">
import { useSeatingStore } from '@/stores/seating-store';
import type { Seating } from '@/types/seating.type';
import { onMounted, provide, ref } from 'vue';

const { tables, seating, init } = useSeatingStore();
const seat = ref<Seating>();
const notFound = ref(false);
const tableChart = ref<HTMLElement>();
const page = ref<HTMLElement>();

const querySeat = (query: string) => {
  notFound.value = false;

  seat.value = seating.find((s) => {
    return s.name.split(/,|，|、/).includes(query);
  });

  if (!seat.value) notFound.value = true;

  if (seat.value) {
    tableChart.value?.scrollIntoView();
  }
};

provide('seat', seat);
provide('notFound', notFound);

onMounted(async () => {
  if (!tables?.length && !seating?.length) await init();
});
</script>
