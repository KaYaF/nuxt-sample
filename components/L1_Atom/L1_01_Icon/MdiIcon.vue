<script setup lang="ts">
import {ICON_SIZE} from '~/constants/common';

defineNuxtComponent({
  name: 'MdiIcon',
});

type Props = {
  iconName: string;
  size?: number;
};

withDefaults(defineProps<Props>(), {
  size: ICON_SIZE,
});
</script>

<template>
  <div class="mdi-icon">
    <v-icon :aria-label="`${iconName}-icon`" :size="size" aria-hidden="true"
      >mdi-{{ iconName }}</v-icon
    >
  </div>
</template>
