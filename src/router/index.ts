import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "list" */ "@/pages/todo/todo-list").then(
        (m) => m.TodoListPage
      ),
  },
  {
    path: "/:id",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "@/pages/todo/todo-detail").then(
        (m) => m.TodoDetailPage
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export const createRouter = () => {
  return router;
};

export default router;
