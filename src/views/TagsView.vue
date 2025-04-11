<template>
    <div class="tag">
        <div v-if="error">{{ error }}</div>
        <div v-if="tagedPosts.length">
            <PostList :posts="tagedPosts" />
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
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: "TagsView",
    components: {
        PostList, SpinnerComp
    },
    setup() {
        const route = useRoute();
        const { posts, load, error } = getPosts();

        load();


        const tagedPosts = computed(() => {
            return posts.value.filter(post => post.tags.includes(route.params.tag))
        })

        return { tagedPosts, error }
    }
}
</script>

<style></style>