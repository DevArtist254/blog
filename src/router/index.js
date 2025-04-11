import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "@/views/DetailsView.vue";
import CreateView from "@/views/CreateView.vue";
import TagsView from "@/views/TagsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/posts/:id",
    name: "DetailsView",
    component: DetailsView,
    props: true,
  },
  {
    path: "/post/create",
    name: "CreateView",
    component: CreateView,
  },
  {
    path: "/tags/:tag",
    name: "TagsView",
    component: TagsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
