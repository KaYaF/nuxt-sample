<script setup lang="ts">
import MemoPanelContentDefault from './MemoPanelContentDefault.vue';
import MemoPanelContentEdit from './MemoPanelContentEdit.vue';
import {Memo} from '~/types/contents/Memo';

defineNuxtComponent({
  name: 'MemoPanel',
});

type Props = {
  index: number;
  memo: Memo;
};

const props = defineProps<Props>();

const isEdit = ref<boolean>(false);

type Emits = {
  (name: 'updateMemo', memo: Memo, index: number): void;
  (name: 'deleteMemo', index: number): void;
};

const emit = defineEmits<Emits>();

const updateMemo = (memo: Memo) => {
  emit('updateMemo', memo, props.index);
  isEdit.value = false;
};

const setEditMode = (isEditMode: boolean) => {
  isEdit.value = isEditMode;
};

const deleteMemo = () => {
  emit('deleteMemo', props.index);
};
</script>

<template>
  <div class="memo-panel">
    <v-expansion-panel>
      <v-expansion-panel-header> {{ memo.title }} </v-expansion-panel-header>

      <v-expansion-panel-content>
        <v-expand-transition>
          <MemoPanelContentEdit
            v-if="isEdit"
            :memo="memo"
            @updateMemo="updateMemo"
            @cancel="setEditMode(false)"
          >
          </MemoPanelContentEdit>
          <MemoPanelContentDefault
            v-else
            :content="memo.content"
            @changeToEditMode="setEditMode(true)"
            @deleteMemo="deleteMemo"
          >
          </MemoPanelContentDefault>
        </v-expand-transition>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>
