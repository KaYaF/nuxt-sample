<template>
  <div class="text-button" @click="onClick">
    <v-btn rounded :color="color">
      <slot />
    </v-btn>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'TextButton',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },
  setup(_props, context) {
    const onClick = (e: PointerEvent) => context.emit('onClick', e);

    return {onClick};
  },
});
</script>
