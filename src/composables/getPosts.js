// import { projectFirestore } from "@/firebase/config";
// import { getDoc } from "firebase/firestore";
import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      const data = await fetch("http://localhost:3000/posts");

      if (!data.ok) throw new Error("no data available");

      posts.value = await data.json();

      /*
      //GET THE COLLECTION AND CONNECTION = REF
      const postCollectionRef = await projectFirestore
        .collection("posts")
        .get();

      // get the data
      const res = await getDoc(postCollectionRef);

      // map the returned value onto the post
      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });*/
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
