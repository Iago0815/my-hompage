import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Blog from "./views/Blog.vue";
import Design from "./views/Design.vue";
import Contact from "./views/Contact.vue";
import NotFound from "./components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "home" },
    { path: "/home", name: "home", component: Home },

    { path: "/projects", name: "Projects", component: Projects },
    { path: "/blog", name: "Blog", component: Blog },
    { path: "/design", name: "Design", component: Design },
    { path: "/about", name: "About", component: About },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
