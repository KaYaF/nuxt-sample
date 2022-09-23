<script setup lang="ts">
import {defineComponent} from 'vue';
import {ICON_SIZE} from '~/constants/common';

defineComponent({
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
  (name: 'onClick', event: MouseEvent): void;
};
const emit = defineEmits<Emits>();

const onClick = (e: MouseEvent) => emit('onClick', e);
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
