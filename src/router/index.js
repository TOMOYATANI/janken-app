import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Game from "../components/game.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
];

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
