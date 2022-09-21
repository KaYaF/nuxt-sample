<template>
  <div class="memo-panel">
    <v-expansion-panel>
      <!-- use L1 and L2 later -->
      <v-expansion-panel-header> {{ title }} </v-expansion-panel-header>

      <v-expansion-panel-content>
        <v-expand-transition>
          <MemoPanelContentEdit
            v-if="isEdit"
            :title="title"
            :content="content"
            @updateMemo="updateMemo"
            @cancel="setEditMode(false)"
          >
          </MemoPanelContentEdit>
          <MemoPanelContentDefault
            v-else
            :content="content"
            @changeToEditMode="setEditMode(true)"
            @deleteMemo="deleteMemo"
          >
          </MemoPanelContentDefault>
        </v-expand-transition>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from '@nuxtjs/composition-api';
import MemoPanelContentDefault from './MemoPanelContentDefault.vue';
import MemoPanelContentEdit from './MemoPanelContentEdit.vue';

export default defineComponent({
  name: 'MemoPanel',
  components: {MemoPanelContentDefault, MemoPanelContentEdit},
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const isEdit = ref<boolean>(false);
    const title = 'memo: title';
    const content = 'memo: content';

    const updateMemo = (title: string, content: string) => {
      console.log('updateMemo', props.index, title, content);
      isEdit.value = false;
    };

    const setEditMode = (isEditMode: boolean) => {
      isEdit.value = isEditMode;
    };

    const deleteMemo = () => {
      console.log('deleteMemo', props.index);
    };

    return {
      isEdit,
      title,
      content,
      updateMemo,
      setEditMode,
      deleteMemo,
    };
  },
});
</script>
