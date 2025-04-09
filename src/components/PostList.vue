<template>
    <div :key="post.id" v-for="post in posts">
        <SinglePost :post="post" />
    </div>
</template>

<script>
import SinglePost from './SinglePost.vue';

export default {
    name: "PostList",
    props: ['posts'],
    components: { SinglePost }
}
</script>

<style></style>