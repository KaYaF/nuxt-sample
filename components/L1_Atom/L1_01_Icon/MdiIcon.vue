<template>
  <div class="mdi-icon">
    <v-icon :aria-label="`${iconName}-icon`" :size="size" aria-hidden="true"
      >mdi-{{ iconName }}</v-icon
    >
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';
import {ICON_SIZE} from '~/constants/common';

export default defineComponent({
  name: 'MdiIcon',
  props: {
    iconName: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: ICON_SIZE,
    },
  },
  setup() {},
});
</script>
