<template>
  <div class="memo-panel-content-edit">
    <div class="memo-panel-content">
      <title-small text="title:" />
      <v-text-field
        v-model="titleEdit"
        outlined
        placeholder="input title"
        single-line
      />

      <title-small text="content:" />
      <v-textarea v-model="contentEdit" outlined placeholder="input content" />
    </div>
    <div class="memo-panel-footer d-flex justify-end mb-2">
      <TextButton class="px-2" @onClick="updateMemo"> Edit </TextButton>
      <TextButton class="px-2" color="accent" @onClick="cancel">
        Cancel
      </TextButton>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from '@nuxtjs/composition-api';
import TextButton from '~/components/L1_Atom/L1_02_Button/TextButton.vue';
import TitleSmall from '~/components/L1_Atom/L1_03_Text/TitleSmall.vue';

export default defineComponent({
  name: 'MemoPanelContentEdit',
  components: {TextButton, TitleSmall},
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const titleEdit = ref<string>(props.title);
    const contentEdit = ref<string>(props.content);

    const updateMemo = () =>
      context.emit('updateMemo', titleEdit.value, contentEdit.value);

    const cancel = () => context.emit('cancel');

    return {titleEdit, contentEdit, updateMemo, cancel};
  },
});
</script>
