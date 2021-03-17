import HomeFr from "../../views/fr/Home.vue";
import AboutFr from "../../views/fr/About.vue";
import ContactFr from "../../views/fr/Blog.vue";
import DesignFr from "../../views/fr/Design.vue";
import ProjectsFr from "../../views/fr/Projects.vue";
import BlogFr from "../../views/fr/Blog.vue";

const routes = [
  {
    path: "/fr/home",
    component: HomeFr,
  },
  {
    path: "/fr/about",
    component: AboutFr,
  },
  {
    path: "/fr/blog",
    component: BlogFr,
  },
  {
    path: "/fr/design",
    component: DesignFr,
  },
  {
    path: "/fr/projects",
    component: ProjectsFr,
  },
  {
    path: "/fr/contact",
    component: ContactFr,
  },
];

export default routes;
