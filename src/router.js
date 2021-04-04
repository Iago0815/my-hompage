import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Blog from "./views/Blog.vue";
import Design from "./views/Design.vue";
import Contact from "./views/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },

    { path: "/projects", component: Projects },
    { path: "/blog", component: Blog },
    { path: "/design", component: Design },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
  ],
});

export default router;
