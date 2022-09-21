<template>
  <div class="memo-panel">
    <v-expansion-panel>
      <!-- use L1 and L2 later -->
      <v-expansion-panel-header> memo: title </v-expansion-panel-header>

      <v-expansion-panel-content>
        This is the {{ index }}-th memo.<br />
        We can get the props and returned properties of the setup method.<br />
        <br />
        Test: squared index number is {{ squaredIndex }}
        <v-row>
          <v-spacer />
          <v-col cols="1">
            <MdiIconButton icon-name="note-edit-outline" @onClick="editMemo" />
          </v-col>
          <v-col cols="1">
            <MdiIconButton
              icon-name="delete-outline"
              color-mode="red"
              @onClick="deleteMemo"
            />
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';
import MdiIconButton from '~/components/L1_Atom/L1_02_Button/MdiIconButton.vue';

export default defineComponent({
  name: 'MemoPanel',
  components: {MdiIconButton},
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props, context) {
    const editMemo = (e: PointerEvent) => {
      console.log('editMemo');
    };

    const deleteMemo = (e: PointerEvent) => {
      console.log('deleteMemo');
    };

    return {squaredIndex: Math.pow(props.index, 2), editMemo, deleteMemo};
  },
});
</script>
