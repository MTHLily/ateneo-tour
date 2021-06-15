<template>
  <div class="marzipano-viewer-container">
    <div ref="pano" id="pano"></div>
  </div>
  <div id="sceneList">
    <ul class="scenes">
      <marzipano-scene
        ref="sceneTest"
        :sceneData="this.sceneData.scenes[1]"
      ></marzipano-scene>
    </ul>
  </div>

  <div id="titleBar">
    <h1 class="sceneName"></h1>
  </div>

  <a href="javascript:void(0)" id="autorotateToggle">
    <img class="icon off" src="img/play.png" />
    <img class="icon on" src="img/pause.png" />
  </a>

  <a href="javascript:void(0)" id="fullscreenToggle">
    <img class="icon off" src="img/fullscreen.png" />
    <img class="icon on" src="img/windowed.png" />
  </a>

  <a href="javascript:void(0)" id="sceneListToggle">
    <img class="icon off" src="img/expand.png" />
    <img class="icon on" src="img/collapse.png" />
  </a>

  <marzipano-camera-controls
    :velocity="cameraSpeed.velocity"
    :friction="cameraSpeed.friction"
    ref="cameraControls"
  ></marzipano-camera-controls>
</template>

<script>
// import Marzipano from "marzipano";
var Marzipano = require("marzipano");
import APP_DATA from "../../assets/data/data";
import MarzipanoCameraControls from "./MarzipanoCameraControls.vue";
import MarzipanoScene from "./MarzipanoScene.vue";

export default {
  components: { MarzipanoCameraControls, MarzipanoScene },
  mounted() {
    // Initialize the viewer
    this.viewer = new Marzipano.Viewer(
      document.querySelector("#pano"),
      this.viewerOpts
    );

    var scene = this.$refs.sceneTest.initialize(this.viewer);

    // Initialize the viewer
    this.$refs.cameraControls.initialize(this.viewer);

    scene.switchTo();
  },
  data: function() {
    return {
      cameraSpeed: {
        velocity: 0.7,
        friction: 3,
      },
      viewer: null,
      viewerOpts: {
        controls: {
          mouseViewMode: "drag",
        },
      },
      sceneData: APP_DATA,
    };
  },
};
</script>

<style></style>
