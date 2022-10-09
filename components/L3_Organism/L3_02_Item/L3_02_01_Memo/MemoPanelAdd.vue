<script setup lang="ts">
import {Memo} from '~/types/contents/Memo';
import MemoPanelContentEdit from './MemoPanelContentEdit.vue';

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
        {{ $vuetify.lang.t('$vuetify.L3.item.memo.memo_panel_add.new_memo') }}
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
