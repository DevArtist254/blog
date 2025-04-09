<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <SpinnerComp />
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
import getPosts from '@/composables/getPosts';

export default {
  name: "HomeView",
  components: {
    PostList, SpinnerComp
  },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error }
  }
}
</script>

<style></style>