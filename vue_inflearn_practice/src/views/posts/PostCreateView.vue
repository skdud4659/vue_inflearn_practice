<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input v-model="form.title" class="form-control" id="title" />
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">내용</label>
        <textarea
          v-model="form.contents"
          class="form-control"
          id="contents"
          rows="3"
        ></textarea>
      </div>
      <div class="pt-4">
        <button
          type="button"
          class="btn btn-outline-dark me-2"
          @click="goListPage"
        >
          목록
        </button>
        <button class="btn btn-primary">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';

const router = useRouter();
const form = ref({
  title: null,
  contents: null,
});
const goListPage = () => {
  router.push('/posts');
};
const save = () => {
  const data = {
    ...form.value,
    createdAt: Date.now(),
  };
  try {
    createPost(data);
    router.push('/posts');
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss" scoped></style>
