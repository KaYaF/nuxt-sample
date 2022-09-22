<template>
  <div class="memo-panel-content-default">
    <div class="memo-panel-content">
      {{ content }}
    </div>
    <div class="memo-panel-footer">
      <v-row>
        <v-spacer />
        <v-col cols="1">
          <MdiIconButton
            icon-name="note-edit-outline"
            @onClick="changeToEditMode"
          />
        </v-col>
        <v-col cols="1">
          <MdiIconButton
            icon-name="delete-outline"
            color-mode="red"
            @onClick="deleteMemo"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';
import MdiIconButton from '~/components/L1_Atom/L1_02_Button/MdiIconButton.vue';

export default defineComponent({
  name: 'MemoPanelContentDefault',
  components: {MdiIconButton},
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  setup(_props, context) {
    const changeToEditMode = () => {
      context.emit('changeToEditMode');
    };

    const deleteMemo = () => {
      context.emit('deleteMemo');
    };

    return {changeToEditMode, deleteMemo};
  },
});
</script>
