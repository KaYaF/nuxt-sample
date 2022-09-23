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

<script lang="ts">
import {defineComponent, PropType} from '@nuxtjs/composition-api';
import {SidebarItem} from '~/types/contents/Sidebar';

export default defineComponent({
  name: 'MemoPanels',
  components: {},
  props: {
    items: {
      type: Array as PropType<SidebarItem[]>,
      required: true,
    },
  },
  setup() {},
});
</script>
