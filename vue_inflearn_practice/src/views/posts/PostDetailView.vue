<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.contents }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
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
        <button class="btn btn-outline-danger" @click="remove">삭제하기</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { deletePost, getPostById } from '@/api/posts';
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
const post = ref({});
const goListPage = () => {
  router.push('/posts');
};
const goEditPage = () => {
  router.push(`/posts/${props.id}/edit`);
};
const fetchPost = async () => {
  try {
    const { data } = await getPostById(props.id);
    post.value = { ...data };
  } catch (err) {
    console.log(err);
  }
};
const remove = async () => {
  try {
    if (confirm('삭제 하시겠습니까?') === false) {
      return;
    }
    await deletePost(props.id);
    router.push('/posts');
  } catch (err) {
    console.log(err);
  }
};
fetchPost();
</script>

<style lang="scss" scoped></style>
