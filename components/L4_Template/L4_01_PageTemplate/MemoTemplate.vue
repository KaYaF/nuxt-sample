<script setup lang="ts">
import {defineComponent, PropType} from 'vue';
import MemoPanels from '~/components/L3_Organism/L3_01_Layout/MemoPanels.vue';
import {Memo} from '~/types/contents/Memo';

defineComponent({
  name: 'MemoTemplate',
});

defineProps({
  memos: {
    type: Array as PropType<Memo[]>,
    required: true,
  },
});

type Emits = {
  (name: 'createMemo', memo: Memo): void;
  (name: 'editMemo', memo: Memo, index: number): void;
  (name: 'deleteMemo', index: number): void;
};

const emit = defineEmits<Emits>();

const createMemo = (memo: Memo) => {
  emit('createMemo', memo);
};

const editMemo = (memo: Memo, index: number) => {
  emit('editMemo', memo, index);
};

const deleteMemo = (index: number) => {
  emit('deleteMemo', index);
};
</script>

<template>
  <div class="memo-template">
    <MemoPanels
      :memos="memos"
      @createMemo="createMemo"
      @editMemo="editMemo"
      @deleteMemo="deleteMemo"
    />
  </div>
</template>
