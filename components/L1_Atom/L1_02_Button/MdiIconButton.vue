<script setup lang="ts">
import {ICON_SIZE} from '~/constants/common';

defineNuxtComponent({
  name: 'MdiIconButton',
});

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
  (name: 'click', event: MouseEvent): void;
};
const emit = defineEmits<Emits>();
</script>

<template>
  <div class="mdi-icon-button" @click="e => emit('click', e)">
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
