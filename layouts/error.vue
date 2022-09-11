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

<script lang="ts">
import {defineComponent, useMeta} from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'ErrorLayout',
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    const pageNotFound = '404 Not Found';
    const otherError = 'An error occurred';

    useMeta({
      title: props.error.statusCode === 404 ? pageNotFound : otherError,
    });

    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    };
  },
  head: {},
});
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
