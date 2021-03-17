import { createRouter, createWebHashHistory } from "vue-router";
import EngRoutes from "./en/index.js";
import EsRoutes from "./es/index.js";
import FrRoutes from "./fr/index.js";

const baseRoutes = [];

const routes = baseRoutes.concat(EngRoutes, EsRoutes, FrRoutes);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
