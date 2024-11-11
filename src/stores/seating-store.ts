import { useGetSeating } from '@/composables/seating/use-get-seating';
import { useGetTables } from '@/composables/seating/use-get-tables';
import { appLoading } from '@/plugins/app-loading';
import type { Seating, Table } from '@/types/seating.type';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSeatingStore = defineStore('seating', () => {
  const tables = ref<Table[]>([]);
  const seating = ref<Seating[]>([]);

  const setTables = async () => {
    const { data: tableList, fetch: getTables } = useGetTables();

    await getTables();

    tableList.value?.forEach((table) => {
      const [name, row, column] = table;

      tables.value.push({
        name,
        row: parseInt(row),
        column: parseInt(column),
      });
    });
  };

  const getSeating = async () => {
    const { data: seatingList, fetch: getSeating } = useGetSeating();

    await getSeating();

    seatingList.value?.forEach((seat) => {
      const [name, table] = seat;

      seating.value.push({
        name,
        table,
      });
    });
  };

  const init = async () => {
    appLoading.start('正在擺設桌子，請稍候...');

    try {
      await setTables();
      await getSeating();
    } finally {
      appLoading.stop();
    }
  };

  return {
    tables,
    seating,
    init,
  };
});
