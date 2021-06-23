<template>
  <div class="marzipano-viewer-container">
    <div ref="pano" id="pano"></div>
  </div>
  <marzipano-scene-list>
    <marzipano-scene
      v-for="(scene, index) in sceneData.scenes"
      :key="scene.id"
      :disabled="scene.disabled"
      :sceneData="scene"
      :ref="
        (el) => {
          sceneElements[index] = el;
        }
      "
    ></marzipano-scene>
  </marzipano-scene-list>

  <div id="titleBar">
    <h1 class="sceneName" v-if="scenes.length">
      {{ getCurrentSceneWithData().data.name }}
    </h1>
  </div>

  <a href="javascript:void(0)" id="autorotateToggle">
    <img class="icon off" src="img/play.png" />
    <img class="icon on" src="img/pause.png" />
  </a>

  <a href="javascript:void(0)" id="fullscreenToggle">
    <img class="icon off" src="img/fullscreen.png" />
    <img class="icon on" src="img/windowed.png" />
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
import { ref } from "vue";
import APP_DATA from "../../assets/data/data";
import MarzipanoCameraControls from "./UI/MarzipanoCameraControls.vue";
import MarzipanoSceneList from "./UI/MarzipanoSceneList.vue";
import MarzipanoScene from "./MarzipanoScene.vue";

export default {
  components: { MarzipanoCameraControls, MarzipanoSceneList, MarzipanoScene },
  mounted() {
    // viewer setup
    // viewer must be initialized as a non-vuejs variable because
    // hotspots break if it isn't
    const viewer = new Marzipano.Viewer(
      document.querySelector("#pano"),
      this.viewerOpts
    );

    // used to access viewer in other methods
    this.viewer = viewer;

    // Initialize scenes
    this.scenes = this.sceneElements.map((scene) => {
      return scene.initialize(viewer);
    });

    this.sceneElements.forEach((scene) => {
      scene.addHotspots(this.scenes);
    });

    // Initialize the viewer
    this.$refs.cameraControls.initialize(viewer);

    // Default scene
    viewer.switchScene(viewer.listScenes()[0]);
  },
  methods: {
    // Gets the scene currently in view
    getCurrentSceneWithData() {
      var currentScene = this.viewer.scene();

      return this.scenes.find((scene) => scene.scene === currentScene);
    },
  },
  data: function() {
    return {
      // Settings for the camera controls
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
      // Data imported from assets/data/data.js
      sceneData: APP_DATA,

      // VueJS Marzipano Scene Components
      sceneElements: ref([]),

      // Marzipano Scenes
      scenes: ref([]),
    };
  },
};
</script>

<style></style>
