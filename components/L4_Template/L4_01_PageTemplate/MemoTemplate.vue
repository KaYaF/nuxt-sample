<template>
  <div class="memo-template">
    <MemoCards />
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';
import MemoCards from '~/components/L3_Organisms/L3_01_Layout/MemoCards.vue';

export default defineComponent({
  name: 'MemoTemplate',
  components: {MemoCards},
  setup() {},
});
</script>
