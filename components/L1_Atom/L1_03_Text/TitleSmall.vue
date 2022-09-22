<template>
  <div class="title-small">
    <div class="fs-14">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'TitleSmall',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/Text/TextSize.scss';
</style>
