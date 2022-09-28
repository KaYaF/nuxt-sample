<script setup lang="ts">
import {defineNuxtComponent} from '@nuxt/bridge/dist/runtime';
import Sidebar from '~/components/L3_Organism/L3_01_Layout/Sidebar.vue';
import {ROUTE} from '~/constants/route';
import {SidebarItem} from '~/types/contents/Sidebar';

defineNuxtComponent({
  name: 'DefaultLayout',
});

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

const title = 'Nuxt Sample';
</script>

<template>
  <div class="default-layout">
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
  </div>
</template>
