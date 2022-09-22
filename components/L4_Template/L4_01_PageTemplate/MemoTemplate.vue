<template>
  <div class="memo-template">
    <MemoPanels
      :memos="memos"
      @updateMemo="updateMemo"
      @deleteMemo="deleteMemo"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from '@nuxtjs/composition-api';
import MemoPanels from '~/components/L3_Organisms/L3_01_Layout/MemoPanels.vue';
import {Memo} from '~/types/contents/Memo';

export default defineComponent({
  name: 'MemoTemplate',
  components: {MemoPanels},
  props: {
    memos: {
      type: Array as PropType<Memo[]>,
      required: true,
    },
  },
  setup(_props, context) {
    const updateMemo = (memo: Memo, index: number) => {
      context.emit('updateMemo', memo, index);
    };

    const deleteMemo = (index: number) => {
      context.emit('deleteMemo', index);
    };

    return {updateMemo, deleteMemo};
  },
});
</script>
