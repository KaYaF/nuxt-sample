<template>
  <div class="memo-panel">
    <v-expansion-panel>
      <!-- use L1 and L2 later -->
      <v-expansion-panel-header> memo: title </v-expansion-panel-header>

      <v-expansion-panel-content>
        This is the {{ index }}-th memo.<br />
        We can get the props and returned properties of the setup method.<br />
        <br />
        Test: squared index number is {{ squaredIndex }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'MemoPanel',
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props, context) {
    return {squaredIndex: Math.pow(props.index, 2)};
  },
});
</script>
