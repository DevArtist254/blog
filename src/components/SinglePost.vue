<template>
    <div class="">
        <router-link :to="{ name: 'DetailsView', params: { id: post.id } }">
            <h2>{{ post.title }}</h2>
            <p>{{ snippet }}</p>
            <span :key="tag" v-for="tag in post.tags">
                # {{ tag }}
            </span>
        </router-link>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: "SinglePost",
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return `${props.post.body.substring(0, 100)}...`
        })

        return { snippet }
    }
}
</script>

<style></style>