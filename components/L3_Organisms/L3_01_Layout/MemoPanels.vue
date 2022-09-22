<template>
  <div class="memo-panels">
    <v-expansion-panels multiple>
      <v-row justify="center" class="py-3">
        <v-col v-for="(memo, index) in memos" :key="index" cols="12">
          <MemoPanel :index="index" :memo="memo" />
        </v-col>
      </v-row>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from '@nuxtjs/composition-api';
import MemoPanel from '../L3_02_Item/L3_02_01_Memo/MemoPanel.vue';
import {Memo} from '~/types/contents/Memo';

export default defineComponent({
  name: 'MemoPanels',
  components: {MemoPanel},
  props: {
    memos: {
      type: Array as PropType<Memo[]>,
      required: true,
    },
  },
  setup() {},
});
</script>
