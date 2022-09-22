<template>
  <div class="memo-template">
    <MemoPanels :memos="memos" />
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
  setup() {},
});
</script>
