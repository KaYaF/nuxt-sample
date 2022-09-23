<template>
  <v-app dark>
    <Sidebar :items="items" />
    <v-app-bar app>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';
import Sidebar from '~/components/L3_Organism/L3_01_Layout/Sidebar.vue';
import {ROUTE} from '~/constants/route';
import {SidebarItem} from '~/types/contents/Sidebar';

export default defineComponent({
  name: 'DefaultLayout',
  components: {Sidebar},
  setup() {
    const items: SidebarItem[] = [
      {
        icon: 'mdi-apps',
        title: 'Welcome',
        to: ROUTE.home,
      },
      {
        icon: 'mdi-book-open-page-variant',
        title: 'memo',
        to: ROUTE.memo,
      },
    ];

    return {
      items,
      title: 'Nuxt Sample',
    };
  },
});
</script>
