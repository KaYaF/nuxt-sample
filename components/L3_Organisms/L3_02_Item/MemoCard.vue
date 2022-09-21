<template>
  <div class="memo-card">
    <v-card>
      <!-- use L1 and L2 later -->
      <v-card-title> memo: title </v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        This is the {{ index }}-th memo.<br />
        We can get the props and returned properties of the setup method.<br />
        <br />
        Test: squared index number is {{ squaredIndex }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'MemoCard',
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
