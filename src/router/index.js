import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/layouts/BaseLayout"),
    redirect: "homepage",
    children: [
      {
        path: "/",
        name: "homepage",
        component: () => import("../views/Home"),
      },
      {
        path: "/products",
        name: "product.index",
        component: () => import("../views/product/Index"),
      },
      {
        path: "/product/:id",
        name: "product.show",
        component: () => import("../views/product/Show"),
      },
      {
        path: "/blogs",
        name: "blog.index",
        component: () => import("../views/post/Index"),
      },
      {
        path: "/post/:id",
        name: "blog.show",
        component: () => import("../views/post/Show"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("../views/Contact"),
      },
      {
        path: "/cart",
        name: "cart",
        component: () => import("../views/Cart"),
      },
      {
        path: "/checkout",
        name: "checkout",
        component: () => import("../views/Checkout"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("../views/auth/Login"),
      },
    ],
  },
  {
    path: "*",
    name: "not-found",
    component: () => import("../views/errors/NotFound"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
