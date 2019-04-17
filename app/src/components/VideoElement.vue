<template>
  <video ref="movie" controls id="video" poster="@/assets/andy-static.png">
    <source src="@/assets/andy-shortfilm.mp4" type="video/mp4">
  </video>
</template>

<script>
import { store } from "@/store";

export default {
  name: "VideoElement",
  methods: {
    setTime() {
      const movie = this.$refs.movie;
      let readyCheck = false;

      window.setInterval(function() {
        if (movie.readyState > 0 && !readyCheck) {
          store.commit("setTime", movie.duration);
          store.commit("setCurrentTime", movie.currentTime);
          // readyCheck = true;
        }
      }, 1000);
    }
  },
  mounted() {
    this.setTime();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>
