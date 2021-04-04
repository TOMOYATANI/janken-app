<template>
  <div>
    <button href="#" class="btn-retry" @click="retry">もういちど</button>
    <div class="text-inner">
      この勝負…
      <span class="text">{{ resultText }}</span>
    </div>
    <div class="img-area">
      <div v-if="pon">
        <img v-if="this.bot === 0" src="../assets/guu.jpg" />
        <img v-if="this.bot === 1" src="../assets/choki.jpg" />
        <img v-if="this.bot === 2" src="../assets/paa.jpg" />
      </div>
      <div v-else>
        <img class="animation" src="../assets/guu.jpg" />
        <img class="animation scissors" src="../assets/choki.jpg" />
        <img class="animation paper" src="../assets/paa.jpg" />
      </div>
    </div>
    <button
      href="#"
      class="btn-item"
      v-for="item in shapes"
      :key="item.key"
      @click="select(item.key)"
    >
      {{ item.label }}
    </button>
    <br />
  </div>
</template>

<script>
export default {
  name: "Game",
  props: ['scores'],
  data() {
    return {
      resultText: "",
      player: "",
      pon: false,
      shapes: [
        { label: "グー", key: 0, state: false },
        { label: "チョキ", key: 1, state: false },
        { label: "パー", key: 2, state: false },
      ],
    };
  },
  methods: {
    select(key) {
      this.pon = true;
      this.player = key;
      this.result();
    },
    result() {
      this.bot = Math.floor(Math.random() * 3);
      switch ((this.player - this.bot + 3) % 3) {
        case 0:
          this.resultText = "ひきわけ";
          break;
        case 1:
          this.resultText = "まけー";
          break;
        case 2:
          this.resultText = "かち";
          break;
      }
    },
    retry() {
      this.pon = false;
      this.resultText = "";
      this.player = "";
      this.shapes = [
        { label: "グー", key: 0, state: false },
        { label: "チョキ", key: 1, state: false },
        { label: "パー", key: 2, state: false },
      ];
    },
  },
};
</script>

<style lang="scss">
.title {
  font-size: 30px;
  font-weight: bold;
}

.img-area {
  position: relative;
  margin-bottom: 10px;
  height: 300px;
  img {
    width: 300px;
    height: 300px;
  }
  .animation {
    position: absolute;
    animation-name: img;
    animation-duration: 0.3s;
    animation-iteration-count: infinite;
    opacity: 0;
    top: 0;
    left: 39.5%;
  }
  .animation.scissors {
    position: absolute;
    top: 0;
    left: 39.5%;
    animation-delay: 0.1s;
  }
  .animation.paper {
    position: absolute;
    top: 0;
    left: 39.5%;
    animation-delay: 0.2s;
  }
}

.btn-item {
  margin: 10px 5px;
  padding: 5px;
  width: 70px;
  height: 40px;
  cursor: pointer;
  cursor: hand;
  border: none;
  outline: none;
  border-radius: 0;
  background: rgb(165, 211, 255);
}

.btn-item:hover {
  color: rgb(0, 0, 0);
  background: rgba(113, 179, 255, 0.795);
}

.btn-retry {
  margin: 10px 5px;
  padding: 5px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  cursor: hand;
  border: none;
  outline: none;
  border-radius: 0;
  background: rgb(165, 211, 255);
}

.btn-retry:hover {
  color: rgb(0, 0, 0);
  background: rgba(113, 179, 255, 0.795);
}

.text-inner {
  padding: 10px;
  .text {
    font-size: 30px;
    font-weight: bold;
  }
}

@keyframes img {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
