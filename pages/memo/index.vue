<template>
  <div class="memo-page">
    <MemoTemplate :memos="memos" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';
import MemoTemplate from '~/components/L4_Template/L4_01_PageTemplate/MemoTemplate.vue';
import {Memo} from '~/types/contents/Memo';

export default defineComponent({
  name: 'MemoPage',
  components: {MemoTemplate},
  setup() {
    const memoSampleCount = 5;

    const memos: Memo[] = Array(memoSampleCount);
    for (let i = 0; i < memoSampleCount; i++) {
      memos[i] = {
        title: `memo: title ${i}`,
        content: `memo: content ${i}`,
      };
    }

    return {
      memos,
    };
  },
});
</script>
