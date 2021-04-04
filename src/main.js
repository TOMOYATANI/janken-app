import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Game from "./components/game.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/game",
      component: Game,
    },
    {
      path: "*",
      redirect: "/game",
    },
  ],
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
