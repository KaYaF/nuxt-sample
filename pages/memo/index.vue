<template>
  <div class="memo-page">
    <MemoTemplate
      :memos="memos"
      @updateMemo="updateMemo"
      @deleteMemo="deleteMemo"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from '@nuxtjs/composition-api';
import MemoTemplate from '~/components/L4_Template/L4_01_PageTemplate/MemoTemplate.vue';
import {Memo} from '~/types/contents/Memo';

export default defineComponent({
  name: 'MemoPage',
  components: {MemoTemplate},
  setup(_props) {
    const memoSampleCount = 5;

    const memos = ref<Array<Memo>>(Array(memoSampleCount));
    for (let i = 0; i < memoSampleCount; i++) {
      memos.value[i] = {
        title: `memo: title ${i}`,
        content: `memo: content ${i}`,
      };
    }
    const updateMemo = (memo: Memo, index: number) => {
      Object.assign(memos.value[index], memo);
    };

    const deleteMemo = (index: number) => {
      memos.value.splice(index, 1);
    };

    return {
      memos,
      updateMemo,
      deleteMemo,
    };
  },
});
</script>
