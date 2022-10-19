<script setup lang="ts">
defineNuxtComponent({
  name: 'TitleSmall',
});

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
.fs-14 {
  font-size: 14px;
}
</style>
