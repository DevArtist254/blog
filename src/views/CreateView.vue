<template>
    <div class="create">
        <form @submit.prevent="handleSubmit">
            <label>Title:</label>
            <input v-model="title" type="text" required>
            <label>Content:</label>
            <textarea v-model="body" required></textarea>
            <label>Tag (hit enter to add a tag)</label>
            <input @keydown.enter.prevent="handleTagEntry" type="text" v-model="tag">
            <input type="submit" value="Add post" class="button">
        </form>
    </div>
</template>

<script>
import { projectFirestore } from '@/firebase/config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: "CreateView",
    setup() {
        const title = ref('');
        const body = ref('');
        const tag = ref('');
        const tags = [];

        const router = useRouter();

        const handleTagEntry = () => {
            if (!tags.includes(tag.value)) {
                tag.value = tag.value.trim();
                tags.push(tag.value)
            }

            tag.value = ''
        }

        const handleSubmit = () => {
            const post = { title: title.value, body: body.value, tags: tags }

            async function submitPost() {
                try {
                    // const res = await fetch('http://localhost:3000/posts', {
                    //     method: 'POST',
                    //     headers: { "Content-Type": 'application/json' },
                    //     body: JSON.stringify(post)
                    // })

                    await addDoc(collection(projectFirestore, 'posts'), {
                        ...post,
                        createAt: serverTimestamp()
                    })

                    router.push({ name: "home" });

                } catch (error) {
                    console.log(error);
                }
            }

            submitPost()
        }

        return { title, body, tag, handleTagEntry, handleSubmit }
    }
}
</script>

<style>
form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
}

input,
textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
}

textarea {
    height: 160px;
}

label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
}

label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
}

.button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
}
</style>