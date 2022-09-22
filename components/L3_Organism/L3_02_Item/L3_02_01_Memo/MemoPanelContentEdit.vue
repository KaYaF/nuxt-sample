<template>
  <div class="memo-panel-content-edit">
    <ValidationObserver ref="editFormRef">
      <div class="memo-panel-content">
        <title-small text="title:" />
        <ValidationProvider v-slot="{errors}" name="title" rules="required">
          <v-text-field
            v-model="memoEdit.title"
            outlined
            placeholder="input title"
            single-line
            :error-messages="errors"
          />
        </ValidationProvider>

        <title-small text="content:" />
        <ValidationProvider v-slot="{errors}" name="content" rules="required">
          <v-textarea
            v-model="memoEdit.content"
            outlined
            placeholder="input content"
            :error-messages="errors"
          />
        </ValidationProvider>
      </div>
      <div class="memo-panel-footer mb-2">
        <div v-if="addMode" class="d-flex justify-end">
          <TextButton class="px-2" @onClick="updateMemo"> Create </TextButton>
        </div>
        <div v-else class="d-flex justify-end">
          <TextButton class="px-2" @onClick="updateMemo"> Edit </TextButton>
          <TextButton class="px-2" color="accent" @onClick="cancel">
            Cancel
          </TextButton>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from '@nuxtjs/composition-api';
import {ValidationProvider, ValidationObserver} from 'vee-validate';
import TextButton from '~/components/L1_Atom/L1_02_Button/TextButton.vue';
import TitleSmall from '~/components/L1_Atom/L1_03_Text/TitleSmall.vue';
import {Memo} from '~/types/contents/Memo';

export default defineComponent({
  name: 'MemoPanelContentEdit',
  components: {TextButton, TitleSmall, ValidationProvider, ValidationObserver},
  props: {
    memo: {
      type: Object as PropType<Memo>,
      required: true,
    },
    addMode: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const memoEdit = ref<Memo>(Object.assign({}, props.memo));
    const editFormRef = ref<InstanceType<typeof ValidationObserver>>();

    const updateMemo = () => {
      editFormRef.value?.validate().then((success: boolean) => {
        if (success) {
          context.emit(
            'updateMemo',
            Object.assign({}, memoEdit.value),
            editFormRef.value
          );

          memoEdit.value = {title: '', content: ''};
        }
      });
    };

    const cancel = () => {
      Object.assign(memoEdit.value, props.memo);
      context.emit('cancel');
    };

    return {memoEdit, editFormRef, updateMemo, cancel};
  },
});
</script>
