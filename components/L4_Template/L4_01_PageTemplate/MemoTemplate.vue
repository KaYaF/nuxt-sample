<template>
  <div class="memo-template">
    <MemoPanels />
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';
import MemoPanels from '~/components/L3_Organisms/L3_01_Layout/MemoPanels.vue';

export default defineComponent({
  name: 'MemoTemplate',
  components: {MemoPanels},
  setup() {},
});
</script>
