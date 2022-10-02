<script setup lang="ts">
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
const {error} = toRefs(props);

const pageNotFound = '404 Not Found';
const otherError = 'An error occurred';

useNuxt2Meta({
  title: error.value.statusCode === 404 ? pageNotFound : otherError,
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
