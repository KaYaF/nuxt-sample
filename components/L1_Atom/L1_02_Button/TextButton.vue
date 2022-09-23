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
  (name: 'onClick', event: MouseEvent): void;
};
const emit = defineEmits<Emits>();
const onClick = (e: MouseEvent) => emit('onClick', e);
</script>

<template>
  <div class="text-button" @click="onClick">
    <v-btn rounded :color="color">
      <slot />
    </v-btn>
  </div>
</template>
