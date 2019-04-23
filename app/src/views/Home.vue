<template>
  <div class="home">
    <VideoElement :class="{ shake: isShaking }" ref="video" :style="this.videoStyling()"/>
    <transition name="fade">
      <div v-show="this.currentSubtitles()" class="subtitles">
        <h4 :style="this.subtitleStyling()" ref="subtitle">{{this.currentSubtitles()}}</h4>
      </div>
    </transition>
    <div
      :style="this.changeBgOnTime()"
      :class="{ pulse: isPulsing, softPulse: isSoftPulsing }"
      class="interaction"
    ></div>
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
      isPulsing: false,
      isSoftPulsing: false,
      hasError: false
    };
  },
  methods: {
    toggle() {
      this.isShaking = !this.isShaking;
    },
    togglePulse() {
      this.isPulsing = !this.isPulsing;
    },
    toggleSoftPulse() {
      this.isPulsing = !this.isPulsing;
    },
    printSentence(sentence) {
      let str = sentence.split(" ");
      let self = this;
      console.log("length: ", str.length);
      for (var i = 0; i < str.length; i++) {
        (function(index) {
          setTimeout(function() {
            self.$refs.subtitle.innerHTML = str[index];
          }, 100 * i);
        })(i);
      }
    },
    changeBgOnTime() {
      const time = store.state.currentTime;

      if (time >= 4 && time < 14) {
        return {
          width: `70vw`,
          height: `70vh`,
          borderRadius: `50%`,
          backgroundColor: "#fff",
          bottom: `15%`,
          left: `15%`,
          transform: `translate(0, 0)`,
          transition: `all .3s ease-in-out`,
          boxShadow: `rgba(208, 251, 158, 0.4) 0px 0px 60px 130px, rgb(98, 224, 103, 0.4) 0px 0px 300px 160px, rgb(98, 224, 103, 0.4) 0px 0px 540px 190px` /* outer cyan */
        };
      } else if (time >= 14 && time < 17) {
        return {
          width: `1px`,
          height: `1px`,
          borderRadius: `50%`,
          backgroundColor: "#fff",
          bottom: `5%`,
          left: `5%`,
          transform: `translate(0, 0)`,
          transition: `all .3s ease-in-out`,
          boxShadow: `rgb(241, 83, 137) 0px 0px 60px 130px, rgb(236, 48, 34) 0px 0px 300px 160px, rgb(255, 226, 224) 0px 0px 540px 190px` /* outer cyan */
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
          boxShadow: `rgb(241, 83, 137) 0px 0px 60px 130px, rgb(236, 48, 34) 0px 0px 300px 160px, rgb(255, 226, 224) 0px 0px 540px 190px` /* outer cyan */,
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
      } else if (time >= 105 && time < 105.5) {
        return {
          width: `50px`,
          height: `50x`,
          borderRadius: `50%`,
          backgroundColor: "#fff",
          bottom: `5%`,
          left: `25%`,
          transform: `translate(0, 0)`,
          transition: `all .3s ease-in-out`,
          boxShadow: `rgb(241, 83, 137) 0px 0px 60px 130px, rgb(236, 48, 34) 0px 0px 300px 160px, rgb(255, 226, 224) 0px 0px 540px 190px` /* outer cyan */
        };
      } else if (time >= 108 && time < 108.5) {
        return {
          width: `50px`,
          height: `50x`,
          borderRadius: `50%`,
          backgroundColor: "#fff",
          bottom: `5%`,
          left: `25%`,
          transform: `translate(0, 0)`,
          transition: `all .3s ease-in-out`,
          boxShadow: `rgb(241, 83, 137) 0px 0px 60px 130px, rgb(236, 48, 34) 0px 0px 300px 160px, rgb(255, 226, 224) 0px 0px 540px 190px` /* outer cyan */
        };
      } else if (time >= 111 && time < 111.5) {
        return {
          width: `50px`,
          height: `50x`,
          borderRadius: `50%`,
          backgroundColor: "#fff",
          bottom: `5%`,
          left: `25%`,
          transform: `translate(0, 0)`,
          transition: `all .3s ease-in-out`,
          boxShadow: `rgb(241, 83, 137) 0px 0px 60px 130px, rgb(236, 48, 34) 0px 0px 300px 160px, rgb(255, 226, 224) 0px 0px 540px 190px` /* outer cyan */
        };
      } else if (time >= 113 && time < 113.5) {
        return {
          width: `50px`,
          height: `50x`,
          borderRadius: `50%`,
          backgroundColor: "#fff",
          bottom: `5%`,
          left: `25%`,
          transform: `translate(0, 0)`,
          transition: `all .3s ease-in-out`,
          boxShadow: `rgb(241, 83, 137) 0px 0px 60px 130px, rgb(236, 48, 34) 0px 0px 300px 160px, rgb(255, 226, 224) 0px 0px 540px 190px` /* outer cyan */
        };
      } else if (time >= 114 && time < 116) {
        return {
          width: `50px`,
          height: `50x`,
          borderRadius: `50%`,
          backgroundColor: "#fff",
          bottom: `5%`,
          left: `25%`,
          transform: `translate(0, 0)`,
          transition: `all .3s ease-in-out`,
          boxShadow: `rgb(241, 83, 137) 0px 0px 60px 130px, rgb(236, 48, 34) 0px 0px 300px 160px, rgb(255, 226, 224) 0px 0px 540px 190px` /* outer cyan */
        };
      }
    },
    videoStyling() {
      const time = store.state.currentTime;
      console.log(this.isShaking);

      if (time >= 4 && time < 14) {
        if (this.isPulsing == false) {
          this.togglePulse();
        }
      } else if (time > 15 && time < 16) {
        this.togglePulse();
      }

      if (time >= 25 && time < 27) {
        if (this.isShaking == false) {
          this.toggle();
        }
      } else if (time > 27 && time < 28) {
        if (this.isShaking == true) {
          this.toggle();
        }
      }

      if (time >= 114 && time < 116) {
      }

      if (time >= 114 && time < 116) {
        if (this.isPulsing == false) {
          this.toggleSoftPulse();
        }
      } else if (time > 116 && time < 117) {
        this.toggleSoftPulse();
      }
    },
    currentSubtitles() {
      const time = store.state.currentTime;
      console.log(time);
      if (time >= 0 && time < 4) {
        return "";
      } else if (time > 4 && time < 15) {
        const str = "* Happy music is playing *";
        return str;
      } else if (time > 15 && time < 20) {
        return "Man yells from behind: ANDREW BOWER!";
      } else if (time > 26 && time < 27) {
        return "Bell rings";
      } else if (time > 28 && time < 29) {
        return "Is this about Leah Richards?";
      } else if (time > 29 && time < 32) {
        return "We are trying to prevent this from spiraling out of control";
      } else if (time > 32 && time < 35) {
        return "It's important that we have full understanding of what happened";
      } else if (time > 36 && time < 42) {
        return "So, we understand that you and leah had a rather complicated past ";
      } else if (time > 42 && time < 44) {
        return "That's an overstatement";
      } else if (time > 44 && time < 45) {
        return "I barely knew her";
      } else if (time > 47 && time < 49) {
        return "Well.. why don't we start at the beginning";
      } else if (time > 50 && time < 51) {
        return "Is it Andrew or...";
      } else if (time > 51 && time < 53) {
        return "It's Andy!";
      } else if (time > 54 && time < 55) {
        return "My name is Andy";
      } else if (time > 58 && time < 60) {
        return "* Clapping *";
      } else if (time > 61 && time < 63) {
        return "Sorry buddy, watch where you're going";
      } else if (time > 68 && time < 70) {
        return "* Breaths heavily *";
      } else if (time > 73 && time < 75) {
        return "Exhales briefly";
      } else if (time > 82 && time < 84) {
        return "Andrew Bower, late again...";
      } else if (time > 85 && time < 86) {
        return "It's Andy... nevermind";
      } else if (time > 87 && time < 88) {
        return "What was that?";
      } else if (time > 89 && time < 91) {
        return "Open your mouth and speak clearly";
      } else if (time > 92 && time < 94) {
        return "I know you guys only have a year left";
      } else if (time > 95 && time < 97) {
        return "But it’s not going to do shit if I let you phone it in";
      } else if (time > 98 && time < 100) {
        return "I am trying to prepare you for beyond these walls";
      } else if (time > 103 && time < 105) {
        return "Now.. diplomacy during the civil war";
      } else if (time > 106 && time < 107) {
        return "* Phone rings *";
      } else if (time > 109 && time < 112) {
        return "C’mon guys, seriously.. phones off";
      } else if (time > 113 && time < 116) {
        return "Or they are mine, you know the policy";
      } else if (time > 119 && time < 122) {
        return "Seriously Andrew, what could be more important than the first period.";
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
  },
  beforeDestroy() {
    clearInterval(this.interval);
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

@-webkit-keyframes spaceboots {
  0% {
    -webkit-transform: translate(2px, 1px) translate(-50%, -50%);
  }
  20% {
    -webkit-transform: translate(-3px, 0px) translate(-50%, -50%);
  }
  40% {
    -webkit-transform: translate(1px, -1px) translate(-50%, -50%);
  }
  60% {
    -webkit-transform: translate(-3px, 1px) translate(-50%, -50%);
  }
  80% {
    -webkit-transform: translate(-1px, -1px) translate(-50%, -50%);
  }
  100% {
    -webkit-transform: translate(1px, -2px) translate(-50%, -50%);
  }
}
.shake {
  -webkit-animation-name: spaceboots;
  -webkit-animation-duration: 0.3s;
  -webkit-transform-origin: 50% 50%;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
}

.pulse {
  animation-name: pulse_animation;
  animation-duration: 10000ms;
  transform-origin: 50% 50%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes pulse_animation {
  0% {
    transform: scale(0.8);
  }
  10% {
    transform: scale(0.9);
  }
  15% {
    transform: scale(0.8);
  }
  25% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(0.8);
  }
  40% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(0.9);
  }
  53% {
    transform: scale(0.8);
  }
  57% {
    transform: scale(0.9);
  }
  63% {
    transform: scale(0.8);
  }
  70% {
    transform: scale(0.9);
  }
  75% {
    transform: scale(0.9);
  }
  83% {
    transform: scale(0.9);
  }
  87% {
    transform: scale(0.8);
  }
  92% {
    transform: scale(0.95);
  }

  96% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(0.85);
  }
}

.softPulse {
  animation-name: softpulse_animation;
  animation-duration: 500ms;
  transform-origin: 50% 50%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes softpulse_animation {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.2);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>