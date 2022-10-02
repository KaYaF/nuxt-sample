<script setup lang="ts">
import MemoPanelContentEdit from './MemoPanelContentEdit.vue';
import {Memo} from '~/types/contents/Memo';

defineNuxtComponent({
  name: 'MemoPanelAdd',
});

type Emits = {
  (name: 'createMemo', memo: Memo): void;
};
const emit = defineEmits<Emits>();
</script>

<template>
  <div class="memo-panel-add">
    <v-expansion-panel>
      <v-expansion-panel-header expand-icon="">
        New memo
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <MemoPanelContentEdit
          :memo="{title: '', content: ''}"
          :add-mode="true"
          @updateMemo="memo => emit('createMemo', memo)"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>
