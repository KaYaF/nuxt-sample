<template>
  <div class="memo-panel">
    <v-expansion-panel>
      <!-- use L1 and L2 later -->
      <v-expansion-panel-header> memo: title </v-expansion-panel-header>

      <v-expansion-panel-content>
        <MemoPanelContentEdit
          v-if="isEdit"
          :content="content"
          @setEditMode="setEditMode"
          @deleteMemo="deleteMemo"
        >
        </MemoPanelContentEdit>
        <MemoPanelContentDefault
          v-else
          :content="content"
          @changeToEditMode="setEditMode(true)"
          @deleteMemo="deleteMemo"
        >
        </MemoPanelContentDefault>
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
    const content = ref<string>('memo: content');

    const setEditMode = (isEditMode: boolean) => {
      isEdit.value = isEditMode;
    };

    const deleteMemo = () => {
      console.log('deleteMemo', props.index);
    };

    return {
      isEdit,
      content,
      setEditMode,
      deleteMemo,
    };
  },
});
</script>
