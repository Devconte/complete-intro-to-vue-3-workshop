export const routes = [
  {
    path: "/",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/user",
    component: () => import("@/views/UserPage.vue"),
  },
  {
    path: "/user/:name",
    component: () => import("@/views/UserDetails.vue"),
  },
];
