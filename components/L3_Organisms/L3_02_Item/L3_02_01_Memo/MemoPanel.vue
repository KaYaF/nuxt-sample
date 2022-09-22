<template>
  <div class="memo-panel">
    <v-expansion-panel>
      <!-- use L1 and L2 later -->
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

<script lang="ts">
import {defineComponent, PropType, ref} from '@nuxtjs/composition-api';
import MemoPanelContentDefault from './MemoPanelContentDefault.vue';
import MemoPanelContentEdit from './MemoPanelContentEdit.vue';
import {Memo} from '~/types/contents/Memo';

export default defineComponent({
  name: 'MemoPanel',
  components: {MemoPanelContentDefault, MemoPanelContentEdit},
  props: {
    index: {
      type: Number,
      required: true,
    },
    memo: {
      type: Object as PropType<Memo>,
      required: true,
    },
  },
  setup(props, context) {
    const isEdit = ref<boolean>(false);

    const updateMemo = (memo: Memo) => {
      context.emit('updateMemo', memo, props.index);
      isEdit.value = false;
    };

    const setEditMode = (isEditMode: boolean) => {
      isEdit.value = isEditMode;
    };

    const deleteMemo = () => {
      context.emit('deleteMemo', props.index);
    };

    return {
      isEdit,
      updateMemo,
      setEditMode,
      deleteMemo,
    };
  },
});
</script>
