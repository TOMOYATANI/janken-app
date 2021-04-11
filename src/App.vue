<template>
  <div id="app">
    <h1>じゃんけんゲーム</h1>
    <div>
      <transition>
        <Game />
      </transition>
    </div>
  </div>
</template>

<script>
import Game from "@/components/game.vue";

export default {
  components: {
    Game
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
