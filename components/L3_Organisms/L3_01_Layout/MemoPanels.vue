<template>
  <div class="memo-panels">
    <v-expansion-panels multiple>
      <v-row justify="center" class="py-3">
        <v-col v-for="key in 10" :key="key" cols="12">
          <MemoPanel :index="key" />
        </v-col>
      </v-row>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';
import MemoPanel from '../L3_02_Item/MemoPanel.vue';

export default defineComponent({
  name: 'MemoPanels',
  components: {MemoPanel},
  props: {},
  setup() {},
});
</script>
