<template>
  <div class="memo-panels">
    <v-row justify="center" class="py-3">
      <v-expansion-panels mandatory>
        <v-col cols="12">
          <MemoPanelAdd @createMemo="createMemo" />
        </v-col>
      </v-expansion-panels>

      <v-expansion-panels multiple>
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
import {defineComponent, PropType} from '@nuxtjs/composition-api';
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
    const createMemo = (memo: Memo) => {
      context.emit('createMemo', memo);
    };

    const editMemo = (memo: Memo, index: number) => {
      context.emit('editMemo', memo, index);
    };

    const deleteMemo = (index: number) => {
      context.emit('deleteMemo', index);
    };

    return {createMemo, editMemo, deleteMemo};
  },
});
</script>
