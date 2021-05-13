import Vue from "vue";
import VueRouter from "vue-router";

import Started from "../views/Started.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "started",
    component: Started,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/grotte",
    name: "grotte",
    component: () => import("../views/Grotte.vue"),
  },
  {
    path: "/maison",
    name: "Maison",
    component: () => import("../views/Maison.vue"),
  },
  {
    path: "/sommeil",
    name: "Sommeil",
    component: () => import("../views/Sommeil.vue"),
  },
  {
    path: "/chateau",
    name: "Chateau",
    component: () => import("../views/Chateau.vue"),
  },
  {
    path: "/lac",
    name: "Lac",
    component: () => import("../views/Lac.vue"),
  },
  {
    path: "/tenue",
    name: "Tenue",
    component: () => import("../views/Tenue.vue"),
  },
  {
    path: "/contacter",
    name: "Contacter",
    component: () => import("../views/Contacter.vue"),
  },
  {
    path: "/map",
    name: "Map",
    component: () => import("../views/Map.vue"),
  },
  {
    path: "/haut",
    name: "Haut",
    component: () => import("../views/Haut.vue"),
  },
  {
    path: "/chapeau",
    name: "Chapeau",
    component: () => import("../views/Chapeau.vue"),
  },
  {
    path: "/minijeu1",
    name: "MiniJeu1",
    component: () => import("../views/MiniJeu1.vue"),
  },
  {
    path: "/minijeu11",
    name: "MiniJeu11",
    component: () => import("../views/MiniJeu1.1.vue"),
  },
  {
    path: "/minijeu12",
    name: "MiniJeu12",
    component: () => import("../views/MiniJeu1.2.vue"),
  },
  {
    path: "/minijeu13",
    name: "MiniJeu13",
    component: () => import("../views/MiniJeu1.3.vue"),
  },
  {
    path: "/minijeu2",
    name: "MiniJeu2",
    component: () => import("../views/MiniJeu2.vue"),
  },
  {
    path: "/minijeu2-reussi",
    name: "MiniJeu2Reussi",
    component: () => import("../views/MiniJeu2Reussi.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
