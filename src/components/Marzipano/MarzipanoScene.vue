<template>
  <a href="javascript:void(0)" class="scene">
    <li class="text">{{ sceneData.name }}</li>
  </a>
</template>

<script>
import Marzipano from "marzipano";
import { createApp } from "vue";
import InfoHotspot from "./Hotspots/InfoHotspot.vue";
import LinkHotspot from "./Hotspots/LinkHotspot.vue";

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    sceneData: {},
  },
  methods: {
    initialize(viewer) {
      var sceneData = this.sceneData;

      // scene setup
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

      this.scene = viewer.createScene({
        source: source,
        geometry: geometry,
        view: view,
      });

      return {
        data: this.sceneData,
        scene: this.scene,
        view: view
      };
    },
    addHotspots(scenes) {
      // info hotspots
      this.sceneData.infoHotspots.forEach(hotspot => {
        let wrapper = document.createDocumentFragment();
        let h = createApp(InfoHotspot, {hotspotData: hotspot}).mount(wrapper);
        h.initialize(this.scene);
      });

      // link hotspots
      this.sceneData.linkHotspots.forEach(hotspot => {
        let wrapper = document.createDocumentFragment();
        let h = createApp(LinkHotspot, {hotspotData: hotspot}).mount(wrapper);
        h.initialize(this.scene, scenes);
      });
    }
  },
  data() {
    return {
      scene: null,
    };
  },
};
</script>

<style></style>
