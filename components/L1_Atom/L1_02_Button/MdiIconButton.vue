<template>
  <div class="mdi-icon-button" @click="onClick">
    <v-icon
      class="icon pa-1"
      :class="'color-mode-' + colorMode"
      :aria-label="`${iconName}-icon`"
      :size="size"
      aria-hidden="true"
      >mdi-{{ iconName }}</v-icon
    >
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';
import {ICON_SIZE} from '~/constants/common';

export default defineComponent({
  name: 'MdiIconButton',
  props: {
    iconName: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: ICON_SIZE,
    },
    colorMode: {
      type: String,
      default: 'blue',
      validator: (value: string) => ['blue', 'red'].includes(value),
    },
  },
  setup(_props, context) {
    const onClick = (e: PointerEvent) => context.emit('onClick', e);

    return {onClick};
  },
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/Button/MdiButton.scss';
</style>
