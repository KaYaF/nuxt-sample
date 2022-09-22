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

<script lang="ts">
import {defineComponent, PropType} from '@nuxtjs/composition-api';
import MemoPanels from '~/components/L3_Organism/L3_01_Layout/MemoPanels.vue';
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
