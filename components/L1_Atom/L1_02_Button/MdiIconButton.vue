<script setup lang="ts">
// name: 'MdiIconButton'
import {ICON_SIZE} from '~/constants/common';

defineProps({
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
});

type Emits = {
  (name: 'onClick', event: PointerEvent): void;
};
const emit = defineEmits<Emits>();

const onClick = (e: PointerEvent) => emit('onClick', e);
</script>

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

<style lang="scss" scoped>
@import '~/assets/scss/Button/MdiButton.scss';
</style>
