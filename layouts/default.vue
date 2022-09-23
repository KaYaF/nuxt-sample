<template>
  <v-app dark>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
import {ROUTE} from '~/constants/route';

export default defineComponent({
  name: 'DefaultLayout',
  setup() {
    return {
      items: [
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
      ],
      title: 'Vuetify.js',
    };
  },
});
</script>
