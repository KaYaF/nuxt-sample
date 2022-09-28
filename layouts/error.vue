<script setup lang="ts">
import {defineNuxtComponent, useNuxt2Meta} from '@nuxt/bridge/dist/runtime';

defineNuxtComponent({
  name: 'ErrorLayout',
  layout: 'error',
  head: {},
});

const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
});

const pageNotFound = '404 Not Found';
const otherError = 'An error occurred';

useNuxt2Meta({
  title: props.error.statusCode === 404 ? pageNotFound : otherError,
});
</script>

<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
