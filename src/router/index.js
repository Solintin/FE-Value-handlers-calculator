import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login.vue";
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
    path: "/:id",
    name: "Overview",
    component: Overview,
    children :[
      {
        path: "users",
        name: "Users",
        component: Users,
      },
      {
        path: "calculator",
        name: "calculator",
        component: Calculator,
      },
    ]
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
