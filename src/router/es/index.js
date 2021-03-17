import HomeEs from "../../views/es/Home.vue";
import AboutEs from "../../views/es/About.vue";
import ContactEs from "../../views/es/Blog.vue";
import DesignEs from "../../views/es/Design.vue";
import ProjectsEs from "../../views/es/Projects.vue";
import BlogEs from "../../views/es/Blog.vue";

const routes = [
  {
    path: "/es/home",
    component: HomeEs,
  },
  {
    path: "/es/about",
    component: AboutEs,
  },
  {
    path: "/es/blog",
    component: BlogEs,
  },
  {
    path: "/es/design",
    component: DesignEs,
  },
  {
    path: "/es/projects",
    component: ProjectsEs,
  },
  {
    path: "/es/contact",
    component: ContactEs,
  },
];

export default routes;
