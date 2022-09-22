<template>
  <div class="memo-panels">
    <v-row justify="center" class="py-3">
      <v-expansion-panels mandatory>
        <v-col cols="12">
          <MemoPanelAdd @createMemo="createMemo" />
        </v-col>
      </v-expansion-panels>

      <v-expansion-panels v-model="openPanelIndexes" multiple>
        <v-col v-for="(memo, index) in memos" :key="index" cols="12">
          <MemoPanel
            :index="index"
            :memo="memo"
            @updateMemo="editMemo"
            @deleteMemo="deleteMemo"
          />
        </v-col>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from '@nuxtjs/composition-api';
import MemoPanel from '../L3_02_Item/L3_02_01_Memo/MemoPanel.vue';
import MemoPanelAdd from '../L3_02_Item/L3_02_01_Memo/MemoPanelAdd.vue';
import {Memo} from '~/types/contents/Memo';

export default defineComponent({
  name: 'MemoPanels',
  components: {MemoPanel, MemoPanelAdd},
  props: {
    memos: {
      type: Array as PropType<Memo[]>,
      required: true,
    },
  },
  setup(_props, context) {
    const openPanelIndexes = ref<number[]>([]);

    const createMemo = (memo: Memo) => {
      context.emit('createMemo', memo);

      for (let i = 0; i < openPanelIndexes.value.length; i++) {
        openPanelIndexes.value[i]++;
      }
    };

    const editMemo = (memo: Memo, index: number) => {
      context.emit('editMemo', memo, index);
    };

    const deleteMemo = (index: number) => {
      context.emit('deleteMemo', index);

      for (let i = 0; i < openPanelIndexes.value.length; i++) {
        if (openPanelIndexes.value[i] === index) {
          openPanelIndexes.value.splice(i, 1);
          i--;
        } else if (openPanelIndexes.value[i] > index) {
          openPanelIndexes.value[i]--;
        }
      }
    };

    return {openPanelIndexes, createMemo, editMemo, deleteMemo};
  },
});
</script>
