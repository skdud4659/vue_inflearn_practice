<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :contents="post.contents"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        />
      </div>
    </div>
    <hr class="my-4" />
    <AppCard>
      <PostDetailView :id="2" />
    </AppCard>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { getPosts } from '@/api/posts';

import PostItem from '@/components/posts/PostItem.vue';
import AppCard from '@/components/AppCard.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';

const router = useRouter();
const posts = ref([]);
const fetchPosts = async () => {
  try {
    const { data } = await getPosts();
    posts.value = data;
  } catch (err) {
    console.log(err);
  }
};
const goPage = id => {
  // router.push(`/posts/${id}`);
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
  });
};
fetchPosts();
</script>

<style lang="scss" scoped></style>
