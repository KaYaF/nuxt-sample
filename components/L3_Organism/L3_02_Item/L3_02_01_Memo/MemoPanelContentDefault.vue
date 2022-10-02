<script setup lang="ts">
import MdiIconButton from '~/components/L1_Atom/L1_02_Button/MdiIconButton.vue';

defineNuxtComponent({
  name: 'MemoPanelContentDefault',
});

defineProps({
  content: {
    type: String,
    required: true,
  },
});

type Emits = {
  (name: 'changeToEditMode'): void;
  (name: 'deleteMemo'): void;
};

const emit = defineEmits<Emits>();

const changeToEditMode = () => {
  emit('changeToEditMode');
};

const deleteMemo = () => {
  emit('deleteMemo');
};
</script>

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
