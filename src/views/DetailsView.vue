<template>
    <div v-if="error">
        {{ error }}
    </div>
    <div v-if="post" class="post">
        <h2>{{ post.title }}</h2>
        <p class="pre">{{ post.body }}</p>
        <span :key="tag" v-for="tag in post.tags">
            # {{ tag }}
        </span>
    </div>
    <div v-else>
        <SpinnerComp />
    </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
import getPost from '@/composables/getPost';

export default {
    props: ['id'],
    components: { SpinnerComp },
    setup(props) {
        const { post, error, load } = getPost(props.id)

        load();

        return { post, error }
    }
}
</script>

<style>
.post {
    max-width: 1200px;
    margin: 0 auto;
}

.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}

.pre {
    white-space: pre-wrap;
}
</style>