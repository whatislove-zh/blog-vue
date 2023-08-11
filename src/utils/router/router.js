import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../../pages/Home.vue"),
    },
    {
      path: "/login",
      component: () => import("../../pages/Login.vue"),
    },
    {
      path: "/register",
      component: () => import("../../pages/Register.vue"),
    },
  ],
});
