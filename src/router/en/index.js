import HomeEng from "../../views/en/Home.vue";
import AboutEng from "../../views/en/About.vue";
import ContactEng from "../../views/en/Blog.vue";
import DesignEng from "../../views/en/Design.vue";
import ProjectsEng from "../../views/en/Projects.vue";
import BlogEng from "../../views/en/Blog.vue";

const routes = [
  {
    path: "/en/home",
    component: HomeEng,
  },
  {
    path: "/en/about",
    component: AboutEng,
  },
  {
    path: "/en/blog",
    component: BlogEng,
  },
  {
    path: "/en/design",
    component: DesignEng,
  },
  {
    path: "/en/projects",
    component: ProjectsEng,
  },
  {
    path: "/en/contact",
    component: ContactEng,
  },
];

export default routes;
