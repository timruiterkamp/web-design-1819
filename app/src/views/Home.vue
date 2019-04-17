<template>
  <div class="home">
    <VideoElement :class="{ shake: isShaking }" ref="video" :style="this.videoStyling()"/>
    <transition name="fade">
      <div v-if="this.currentSubtitles()" class="subtitles">
        <h4 :style="this.subtitleStyling()">{{this.currentSubtitles()}}</h4>
      </div>
    </transition>
    <div :style="this.changeBgOnTime()" class="interaction"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoElement from "@/components/VideoElement.vue";
import { store } from "@/store";

export default {
  name: "home",
  components: {
    VideoElement
  },
  data() {
    return {
      isShaking: false,
      hasError: false
    };
  },
  methods: {
    toggle(e) {
      this.isShaking = !this.isShaking;
    },
    changeBgOnTime() {
      const time = store.state.currentTime;

      // if (time >= 4 && time < 15) {
      //   return {
      //     width: `100vw`,
      //     height: `100vh`,
      //     borderRadius: `50%`,
      //     backgroundColor: "#fff",
      //     bottom: `5%`,
      //     left: `5%`,
      //     transform: `translate(0, 0)`,
      //     transition: `all .3s ease-in-out`,
      //     boxShadow: `0 0 60px 130px #fff,  /* inner white */
      //   0 0 300px 160px #f0f, /* middle magenta */
      //   0 0 540px 190px #0ff` /* outer cyan */
      //   };
      // } else

      if (time >= 15 && time < 17) {
        return {
          width: `1px`,
          height: `1px`,
          borderRadius: `50%`,
          backgroundColor: "#fff",
          bottom: `5%`,
          left: `5%`,
          transform: `translate(0, 0)`,
          transition: `all .3s ease-in-out`,
          boxShadow: `0 0 60px 130px #fff,  /* inner white */
        0 0 300px 160px #f0f, /* middle magenta */
        0 0 540px 190px #0ff` /* outer cyan */
        };
      } else if (time >= 17 && time < 19) {
        return {
          width: `1px`,
          height: `100vh`,
          borderRadius: `50%`,
          backgroundColor: "#fff",
          bottom: `0`,
          left: `5%`,
          transform: `translate(0, 0)`,
          boxShadow: `0 0 60px 130px #fff,  /* inner white */
        0 0 300px 160px #f0f, /* middle magenta */
        0 0 540px 190px #0ff` /* outer cyan */,
          transition: `all .3s ease-in-out`
        };
      } else if (time >= 17 && time < 19) {
        return {
          width: `350px`,
          height: `350px`,
          borderRadius: `50%`,
          backgroundColor: "#fff",
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
          boxShadow: `0 0 60px 130px #fff,  /* inner white */
        0 0 300px 160px #f0f, /* middle magenta */
        0 0 540px 190px #0ff` /* outer cyan */
        };
      }
    },
    videoStyling() {
      const time = store.state.currentTime;
      console.log(this.isShaking);

      if (time > 26 && time < 27) {
        if (this.isShaking == false) {
          this.toggle();
        }
      } else if (time > 28) {
        if (this.isShaking == true) {
          this.toggle();
        }
      }
    },
    currentSubtitles() {
      const time = store.state.currentTime;

      if (time >= 0 && time < 4) {
        return "";
      } else if (time > 4 && time < 15) {
        return "* Happy music is playing *";
      } else if (time > 15 && time < 20) {
        return "Man yells from behind: ANDREW BROWER!";
      } else if (time > 26 && time < 27) {
        return "Bell rings";
      } else if (time > 28 && time < 29) {
        return "Is this about Leah Richards?";
      } else if (time > 29 && time < 32) {
        return "We rather prevent this from spiraling out of control";
      } else if (time > 32 && time < 35) {
        return "It's important that we have full understanding of what happened";
      } else if (time > 36 && time < 38) {
        return "So, we understand that you and leah had a rather complicated past ";
      }
    },
    subtitleStyling() {
      const time = store.state.currentTime;

      if (time > 4 && time < 15) {
        return {
          fontFamily: "Kalam, sans-serif"
        };
      } else if (time > 15) {
        return {
          fontFamily: "Poppins, sans-serif"
        };
      }
    }
  }
};
</script>

<style scoped lang="scss">
body {
  margin: 0;
  font-size: 16px;
}
.home {
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.subtitles {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -85%);
  z-index: 5;
  color: white;
  background-color: black;
  padding: 0.2em 2em;
  font-size: 1.25rem;
}

.interaction {
  z-index: 0;
  position: absolute;
}

video {
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translate3d(0, 0, 0);
  z-index: 1; */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.shake {
  animation: shake 1s linear both;
  backface-visibility: hidden;
  transform-origin: 50%, 50%;
}

@keyframes shake {
  10%,
  90% {
    transform: rotate(0.5deg) translate(-50%, -50%);
  }

  20%,
  80% {
    transform: rotate(-0.5deg) translate(-50%, -50%);
  }

  30%,
  50%,
  70% {
    transform: rotate(0.5deg) translate(-50%, -50%);
  }

  40%,
  60% {
    transform: rotate(-0.5deg) translate(-50%, -50%);
  }
}
</style>