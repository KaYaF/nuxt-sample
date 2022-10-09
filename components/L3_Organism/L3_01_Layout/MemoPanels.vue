<script setup lang="ts">
import {Memo} from '~/types/contents/Memo';
import MemoPanel from '../L3_02_Item/L3_02_01_Memo/MemoPanel.vue';
import MemoPanelAdd from '../L3_02_Item/L3_02_01_Memo/MemoPanelAdd.vue';

defineNuxtComponent({
  name: 'MemoPanels',
});

type Props = {
  memos: Memo[];
};

const props = defineProps<Props>();
const {memos} = toRefs(props);

const openPanelIndexes = computed({
  get: () => {
    // find open panels
    const openPanelIndexes: number[] = [];
    for (let i = 0; i < memos.value.length; i++) {
      if (memos.value[i].isOpen) {
        openPanelIndexes.push(i);
      }
    }
    return openPanelIndexes;
  },
  set: indexes => {
    // update isOpen property for create and delete memo
    memos.value.forEach(memo => (memo.isOpen = false));
    indexes.forEach(i => (memos.value[i].isOpen = true));
    return indexes;
  },
});

type Emits = {
  (name: 'createMemo', memo: Memo): void;
  (name: 'editMemo', memo: Memo, index: number): void;
  (name: 'deleteMemo', index: number): void;
};
const emit = defineEmits<Emits>();
</script>

<template>
  <div class="memo-panels">
    <v-row justify="center" class="py-3">
      <v-expansion-panels mandatory>
        <v-col cols="12">
          <MemoPanelAdd @createMemo="memo => emit('createMemo', memo)" />
        </v-col>
      </v-expansion-panels>

      <v-expansion-panels v-model="openPanelIndexes" multiple>
        <v-col v-for="(memo, index) in memos" :key="index" cols="12">
          <MemoPanel
            :index="index"
            :memo="memo"
            @updateMemo="(memo, index) => emit('editMemo', memo, index)"
            @deleteMemo="index => emit('deleteMemo', index)"
          />
        </v-col>
      </v-expansion-panels>
    </v-row>
  </div>
</template>
