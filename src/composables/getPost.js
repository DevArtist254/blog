import { projectFirestore } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });

      // const data = await fetch(`http://localhost:3000/posts/${id}`);

      // if (!data.ok) throw new Error("no data available");

      // post.value = await data.json();

      let docRef = doc(projectFirestore, "posts", `${id}`);

      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) throw Error("Does not exist");

      post.value = { ...docSnap.data(), id: docSnap.id };
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
