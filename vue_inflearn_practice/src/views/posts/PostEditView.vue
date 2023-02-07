<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <form @submit.prevent="edit">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input v-model="post.title" class="form-control" id="title" />
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">내용</label>
        <textarea
          v-model="post.contents"
          class="form-control"
          id="contents"
          rows="3"
        ></textarea>
      </div>
      <div class="pt-4">
        <button
          type="button"
          class="btn btn-outline-danger me-2"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary">수정하기</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';

const route = useRoute();
const router = useRouter();
const post = ref({
  title: null,
  contents: null,
});
const {
  params: { id },
} = route;
const goDetailPage = () => {
  router.push(`/posts/${id}`);
};
const fetchPost = async () => {
  try {
    const { data } = await getPostById(id);
    post.value = { ...data };
  } catch (err) {
    console.log(err);
  }
};
const edit = async () => {
  try {
    await updatePost(id, { ...post.value });
    router.push(`/posts/${id}`);
  } catch (err) {
    console.log(err);
  }
};
fetchPost();
</script>

<style lang="scss" scoped></style>
