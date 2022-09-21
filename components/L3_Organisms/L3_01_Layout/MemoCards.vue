<template>
  <div class="memo-cards">
    <div v-for="key in 10" :key="key">
      <MemoCard class="mb-4" :index="key" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';
import MemoCard from '../L3_02_Item/MemoCard.vue';

export default defineComponent({
  name: 'MemoCards',
  components: {MemoCard},
  props: {},
  setup() {},
});
</script>
