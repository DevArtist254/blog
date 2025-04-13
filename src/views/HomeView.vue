<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <SpinnerComp />
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
import TagCloud from '@/components/TagCloud.vue';
import getPosts from '@/composables/getPosts';

export default {
  name: "HomeView",
  components: {
    PostList, SpinnerComp, TagCloud
  },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error }
  }
}
</script>

<style>
.home {
  max-width: 12000px;
  margin: 0 auto;
  padding: 10px;
}

/* .layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
} */
</style>