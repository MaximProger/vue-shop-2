import { createRouter, createWebHistory } from "vue-router";
import PageHome from "@/pages/PageHome";
import PageProduct from "@/pages/PageProduct";

const routes = [
  {
    path: "/",
    component: PageHome,
  },
  {
    path: "/product/:id",
    component: PageProduct,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
