<script setup lang="ts">
import {PropType} from '@nuxt/bridge/dist/runtime';
import {SidebarItem} from '~/types/contents/Sidebar';

defineNuxtComponent({
  name: 'Sidebar',
});

defineProps({
  items: {
    type: Array as PropType<SidebarItem[]>,
    required: true,
  },
});
</script>

<template>
  <div class="sidebar">
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
  </div>
</template>
