<template>
  <div class="marzipano-viewer-container">
    <div ref="pano" id="pano"></div>
  </div>
  <div id="sceneList">
    <ul class="scenes">
      <a href="javascript:void(0)" class="scene" data-id="0-jacinto-street-1">
        <li class="text">Jacinto Street 1</li>
      </a>

      <a href="javascript:void(0)" class="scene" data-id="1-jacinto-entrance">
        <li class="text">Jacinto Entrance</li>
      </a>

      <a href="javascript:void(0)" class="scene" data-id="2-to-canisius">
        <li class="text">To Canisius</li>
      </a>

      <a
        href="javascript:void(0)"
        class="scene"
        data-id="3-canisius-building-hallway-1f"
      >
        <li class="text">Canisius Building Hallway 1F</li>
      </a>

      <a href="javascript:void(0)" class="scene" data-id="4-laudato-si">
        <li class="text">Laudato-Si</li>
      </a>

      <a href="javascript:void(0)" class="scene" data-id="5-chapel-entrance-1f">
        <li class="text">Chapel Entrance 1F</li>
      </a>

      <a href="javascript:void(0)" class="scene" data-id="6-chapel-front-1f">
        <li class="text">Chapel Front 1F</li>
      </a>

      <a href="javascript:void(0)" class="scene" data-id="7-chapel-2f">
        <li class="text">Chapel 2F</li>
      </a>
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

export default {
  components: { MarzipanoCameraControls },
  mounted() {
    // Initialize the viewer
    this.viewer = new Marzipano.Viewer(
      document.querySelector("#pano"),
      this.viewerOpts
    );

    var sceneData = APP_DATA.scenes[0];

    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + sceneData.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + sceneData.id + "/preview.jpg" }
    );
    var geometry = new Marzipano.CubeGeometry(sceneData.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(
      sceneData.faceSize,
      (100 * Math.PI) / 180,
      (120 * Math.PI) / 180
    );
    var view = new Marzipano.RectilinearView(
      sceneData.initialViewParameters,
      limiter
    );

    var scene = this.viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
    });

    console.log("Viewer", this.viewer);

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
    };
  },
};
</script>

<style></style>
