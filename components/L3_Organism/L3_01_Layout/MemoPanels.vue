<script setup lang="ts">
// name: 'MemoPanels'
import {ref} from 'vue';
import MemoPanel from '../L3_02_Item/L3_02_01_Memo/MemoPanel.vue';
import MemoPanelAdd from '../L3_02_Item/L3_02_01_Memo/MemoPanelAdd.vue';
import {Memo} from '~/types/contents/Memo';

type Props = {
  memos: Memo[];
};

defineProps<Props>();

const openPanelIndexes = ref<number[]>([]);

type Emits = {
  (name: 'createMemo', memo: Memo): void;
  (name: 'editMemo', memo: Memo, index: number): void;
  (name: 'deleteMemo', index: number): void;
};

const emit = defineEmits<Emits>();

const createMemo = (memo: Memo) => {
  emit('createMemo', memo);

  for (let i = 0; i < openPanelIndexes.value.length; i++) {
    openPanelIndexes.value[i]++;
  }
};

const editMemo = (memo: Memo, index: number) => {
  emit('editMemo', memo, index);
};

const deleteMemo = (index: number) => {
  emit('deleteMemo', index);

  for (let i = 0; i < openPanelIndexes.value.length; i++) {
    if (openPanelIndexes.value[i] === index) {
      openPanelIndexes.value.splice(i, 1);
      i--;
    } else if (openPanelIndexes.value[i] > index) {
      openPanelIndexes.value[i]--;
    }
  }
};
</script>

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
