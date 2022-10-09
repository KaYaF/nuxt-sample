<script setup lang="ts">
import MemoTemplate from '~/components/L4_Template/L4_01_PageTemplate/MemoTemplate.vue';
import {mockMemos} from '~/mocks/memos';
import {Memo} from '~/types/contents/Memo';

defineNuxtComponent({
  name: 'MemoPage',
});

const memos = ref<Array<Memo>>(mockMemos);

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
