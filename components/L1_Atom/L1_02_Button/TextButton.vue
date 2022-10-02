<script setup lang="ts">
defineNuxtComponent({
  name: 'TextButton',
});

defineProps({
  color: {
    type: String,
    default: 'primary',
  },
});

type Emits = {
  (name: 'click', event: MouseEvent): void;
};
const emit = defineEmits<Emits>();
</script>

<template>
  <div class="text-button" @click="e => emit('click', e)">
    <v-btn rounded :color="color">
      <slot />
    </v-btn>
  </div>
</template>
