<template>
  <div class="memo-page">
    <MemoTemplate />
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';
import MemoTemplate from '~/components/L4_Template/L4_01_PageTemplate/MemoTemplate.vue';

export default defineComponent({
  name: 'MemoPage',
  components: {MemoTemplate},
  setup() {},
});
</script>
