<script setup lang="ts">
// name: 'MemoPage'
import {ref} from 'vue';
import MemoTemplate from '~/components/L4_Template/L4_01_PageTemplate/MemoTemplate.vue';
import {Memo} from '~/types/contents/Memo';

const memoSampleCount = 5;

const memosOriginal = Array<Memo>(memoSampleCount);
for (let i = 0; i < memoSampleCount; i++) {
  memosOriginal[i] = {
    title: `memo: title ${i}`,
    content: `memo: content ${i}`,
  };
}

const memos = ref<Array<Memo>>(memosOriginal);

const createMemo = (memo: Memo) => {
  memos.value.reverse().push(memo);
  memos.value.reverse();
};

const editMemo = (memo: Memo, index: number) => {
  Object.assign(memos.value[index], memo);
};

const deleteMemo = (index: number) => {
  memos.value.splice(index, 1);
};
</script>

<template>
  <div class="memo-page">
    <MemoTemplate
      :memos="memos"
      @createMemo="createMemo"
      @editMemo="editMemo"
      @deleteMemo="deleteMemo"
    />
  </div>
</template>
