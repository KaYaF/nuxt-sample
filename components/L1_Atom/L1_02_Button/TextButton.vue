<script setup lang="ts">
import {defineComponent} from 'vue';

defineComponent({
  name: 'TextButton',
});

defineProps({
  color: {
    type: String,
    default: 'primary',
  },
});

type Emits = {
  (name: 'onClick', event: PointerEvent): void;
};
const emit = defineEmits<Emits>();
const onClick = (e: PointerEvent) => emit('onClick', e);
</script>

<template>
  <div class="text-button" @click="onClick">
    <v-btn rounded :color="color">
      <slot />
    </v-btn>
  </div>
</template>
