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
const {index} = toRefs(props);

const isEdit = ref<boolean>(false);

function setEditMode(isEditMode: boolean) {
  isEdit.value = isEditMode;
}

type Emits = {
  (name: 'updateMemo', memo: Memo, index: number): void;
  (name: 'deleteMemo', index: number): void;
};
const emit = defineEmits<Emits>();

function updateMemo(memo: Memo) {
  emit('updateMemo', memo, index.value);
  isEdit.value = false;
}
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
            @cancel="_e => setEditMode(false)"
          >
          </MemoPanelContentEdit>
          <MemoPanelContentDefault
            v-else
            :content="memo.content"
            @changeToEditMode="_e => setEditMode(true)"
            @deleteMemo="_e => emit('deleteMemo', index)"
          >
          </MemoPanelContentDefault>
        </v-expand-transition>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>
