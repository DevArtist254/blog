<template>
    <div class="create">
        <form>
            <label>Title:</label>
            <input v-model="title" type="text" required>
            <label>Content:</label>
            <textarea v-model="body" required></textarea>
            <label>Tag (hit enter to add a tag)</label>
            <input @keydown.enter.prevent="" type="text">
            <input type="submit" value="Add post">
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "CreateView",
    setup() {
        const title = ref('');
        const body = ref('');
        const tag = ref('');
        const tags = ref([]);

        // const 


        return { title, body, tag, tags }
    }
}
</script>

<style></style>