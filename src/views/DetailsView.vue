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
// import { projectFirestore } from '@/firebase/config';
// import { useRoute } from 'vue-router';

export default {
    props: ['id'],
    components: { SpinnerComp },
    setup(props) {
        // const route = useRoute();
        // const { post, error, load } = getPost(route.params.id)
        const { post, error, load } = getPost(props.id)

        load();

        // const handleClick = async () => {
        //     await projectFirestore.collection('posts').doc(props.id).delete()
        // }

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