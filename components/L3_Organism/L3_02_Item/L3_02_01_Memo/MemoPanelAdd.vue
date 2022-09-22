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
          @updateMemo="createMemo"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';
import {ValidationObserver} from 'vee-validate';
import MemoPanelContentEdit from './MemoPanelContentEdit.vue';
import {Memo} from '~/types/contents/Memo';

export default defineComponent({
  name: 'MemoPanelAdd',
  components: {MemoPanelContentEdit},
  props: {},
  setup(_props, context) {
    const createMemo = (
      memo: Memo,
      validationObserver: InstanceType<typeof ValidationObserver>
    ) => {
      context.emit('createMemo', memo);
      validationObserver.reset();
    };

    return {createMemo};
  },
});
</script>
