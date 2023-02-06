<template>
  <AppCard>
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">
      {{ contents }}
    </p>
    <p class="text-muted">{{ createdAt }}</p>
  </AppCard>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue';
defineProps({
  title: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
  },
  createdAt: {
    type: [String, Date, Number],
  },
});
</script>

<style lang="scss" scoped></style>
