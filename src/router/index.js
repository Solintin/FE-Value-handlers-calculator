import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login.vue";
import Register from "../views/register.vue";
import Index from "../views/Admin/Index.vue";
import Rate from "../views/Admin/Rate.vue";
import Overview from "../views/Admin/Overview.vue";
import Users from "../views/Admin/Users.vue";
import Calculator from "../views/Admin/Calculator.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/admin",
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
