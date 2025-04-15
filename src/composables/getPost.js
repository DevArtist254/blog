// import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      const data = await fetch(`http://localhost:3000/posts/${id}`);

      if (!data.ok) throw new Error("no data available");

      post.value = await data.json();

      /*
      let res = await projectFirestore.collection("posts").doc(id).get();

      if (!res.exists) throw Error("Does not exist");

      post.value = { ...res.data(), id: res.id };
      */
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
