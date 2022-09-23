<script setup lang="ts">
// name: 'TitleSmall'

defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="title-small">
    <div class="fs-14">
      {{ text }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/Text/TextSize.scss';
</style>
