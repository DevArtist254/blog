<template>
    <div class="">
        <router-link :to="{ name: 'DetailsView', params: { id: post.id } }">
            <h2>{{ post.title }}</h2>
        </router-link>
        <p>{{ snippet }}</p>
        <span :key="tag" v-for="tag in post.tags" @click="getTag(tag)" class="tag">
            # {{ tag }}
        </span>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: "SinglePost",
    props: ['post'],
    setup(props) {
        const router = useRouter();

        const snippet = computed(() => {
            return `${props.post.body.substring(0, 100)}...`
        })

        const getTag = (id) => {
            router.push({ name: "TagsView", params: { tag: id } })
        }

        return { snippet, getTag }
    }
}
</script>

<style>
.tag {
    cursor: pointer;
}
</style>