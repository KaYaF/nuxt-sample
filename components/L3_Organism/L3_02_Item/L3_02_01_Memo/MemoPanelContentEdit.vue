<script setup lang="ts">
import {PropType} from '@nuxt/bridge/dist/runtime';
import {ValidationProvider, ValidationObserver} from 'vee-validate';
import TextButton from '~/components/L1_Atom/L1_02_Button/TextButton.vue';
import TitleSmall from '~/components/L1_Atom/L1_03_Text/TitleSmall.vue';
import {Memo} from '~/types/contents/Memo';

defineNuxtComponent({
  name: 'MemoPanelContentEdit',
});

const props = defineProps({
  memo: {
    type: Object as PropType<Memo>,
    required: true,
  },
  addMode: {
    type: Boolean,
    default: false,
  },
});
const {memo, addMode} = toRefs(props);

const memoEdit = ref<Memo>(Object.assign({}, memo.value));
const editFormRef = ref<InstanceType<typeof ValidationObserver>>();

type Emits = {
  (name: 'updateMemo', memo: Memo): void;
  (name: 'cancel'): void;
};

const emit = defineEmits<Emits>();

function updateMemo() {
  editFormRef.value?.validate().then((success: boolean) => {
    if (success) {
      emit('updateMemo', Object.assign({}, memoEdit.value));

      if (addMode) {
        memoEdit.value = {title: '', content: ''};
        (editFormRef.value as InstanceType<typeof ValidationObserver>).reset();
      }
    }
  });
}

function cancel() {
  Object.assign(memoEdit.value, memo);
  emit('cancel');
}
</script>

<template>
  <div class="memo-panel-content-edit">
    <ValidationObserver ref="editFormRef">
      <div class="memo-panel-content">
        <title-small
          :text="
            $vuetify.lang.t(
              '$vuetify.L3.item.memo.memo_panel_content_edit.title'
            )
          "
        />
        <ValidationProvider v-slot="{errors}" name="title" rules="required">
          <v-text-field
            v-model="memoEdit.title"
            outlined
            :placeholder="
              $vuetify.lang.t(
                '$vuetify.L3.item.memo.memo_panel_content_edit.input_title'
              )
            "
            single-line
            :error-messages="errors"
          />
        </ValidationProvider>

        <title-small
          :text="
            $vuetify.lang.t(
              '$vuetify.L3.item.memo.memo_panel_content_edit.content'
            )
          "
        />
        <ValidationProvider v-slot="{errors}" name="content" rules="required">
          <v-textarea
            v-model="memoEdit.content"
            outlined
            :placeholder="
              $vuetify.lang.t(
                '$vuetify.L3.item.memo.memo_panel_content_edit.input_content'
              )
            "
            :error-messages="errors"
          />
        </ValidationProvider>
      </div>
      <div class="memo-panel-footer mb-2">
        <div v-if="addMode" class="d-flex justify-end">
          <TextButton class="px-2" @click="updateMemo">
            {{
              $vuetify.lang.t(
                '$vuetify.L3.item.memo.memo_panel_content_edit.create'
              )
            }}
          </TextButton>
        </div>
        <div v-else class="d-flex justify-end">
          <TextButton class="px-2" @click="updateMemo">
            {{
              $vuetify.lang.t(
                '$vuetify.L3.item.memo.memo_panel_content_edit.edit'
              )
            }}
          </TextButton>
          <TextButton class="px-2" color="accent" @click="cancel">
            {{
              $vuetify.lang.t(
                '$vuetify.L3.item.memo.memo_panel_content_edit.cancel'
              )
            }}
          </TextButton>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>
