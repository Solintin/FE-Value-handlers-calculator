import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login.vue";
import Index from "../views/Admin/index.vue";
import Overview from "../views/Admin/overview.vue";
import Users from "../views/Admin/users.vue";
import Calculator from "../views/Admin/calculator.vue";
import Rate from "../views/Admin/rate.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/:id",
    name: "Admin",
    component: Index,
    children: [
      {
        path: "users",
        name: "users",
        component: Users,
      },
      {
        path: "calculator",
        name: "calculator",
        component: Calculator,
      },
      {
        path: "rate",
        name: "rate",
        component: Rate,
      },
      {
        path: "overview",
        name: "overview",
        component: Overview,
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
