const routes = [
  {
    path: "/login",
    component: () => import("./login/page-login.vue"),
  },
  {
    path: "/",
    component: () => import("../layouts/main-layout.vue"),
    children: [
      { path: "", component: () => import("./home-page.vue") },
      {
        path: "/drive/:catchAll(.*)*",
        component: () => import("./drive/page-drive.vue"),
        meta: {
          title: "My Drive",
        },
      },
      {
        path: "/stone",
        component: () => import("./stone/page-stone.vue"),
        meta: {
          title: "My Stones",
        },
      },
      {
        path: "/collection",
        component: () => import("./stone/page-collection.vue"),
        meta: {
          title: "My Collections",
        },
      },
      {
        path: "/resource",
        component: () => import("./resource/page-resource.vue"),
        meta: {
          title: "My Resources",
        },
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("./ErrorNotFound.vue"),
  },
];

export default routes;
