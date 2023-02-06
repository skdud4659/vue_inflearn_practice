<template>
  <div>
    <h2>about</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="goHomePage">home으로 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goHomePage = () => {
  router.push('/');
};
</script>

<style lang="scss" scoped></style>
