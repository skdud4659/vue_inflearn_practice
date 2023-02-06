<template>
  <div>
    <h2>{{ form.title }}</h2>
    <p>{{ form.contents }}</p>
    <p class="text-muted">{{ form.createdAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto" />
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정하기
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제하기</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
  id: Number,
});

const router = useRouter();
// ref
// 장) 스프레드 문법으로 객체 할당 가능, 일관성 유지
// 단) .value로 접근해야함
// reactive
// 장) 객체 할당 불가능
// 단) .value로 접근하지 않아도 괜찮음.
const form = ref({});
const goListPage = () => {
  router.push('/posts');
};
const goEditPage = () => {
  router.push(`/posts/${props.id}/edit`);
};
const fetchPost = () => {
  const data = getPostById(props.id);
  form.value = { ...data };
};
fetchPost();
</script>

<style lang="scss" scoped></style>
