<template>
  <a
    href="javascript:void(0)"
    class="scene"
    @click="switchScene"
    :class="{ disabled: disabled }"
  >
    <li class="text">{{ sceneData.name }}</li>
  </a>
  <info-hotspot
    v-for="(info, index) in sceneData.infoHotspots"
    :key="`${info.yaw}${info.pitch}`"
    :hotspotData="info"
    :ref="
      (el) => {
        infoHotspots[index] = el;
      }
    "
  ></info-hotspot>
  <link-hotspot
    v-for="(link, index) in sceneData.linkHotspots"
    :key="`${link.yaw}${link.pitch}`"
    :hotspotData="link"
    :ref="
      (el) => {
        linkHotspots[index] = el;
      }
    "
  ></link-hotspot>
</template>

<script>
import Marzipano from "marzipano";
// import { createApp, ref } from "vue";
import { ref } from "vue";
import InfoHotspot from "./Hotspots/InfoHotspot.vue";
import LinkHotspot from "./Hotspots/LinkHotspot.vue";

export default {
  components: { InfoHotspot, LinkHotspot },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    sceneData: {},
    sceneIndex: {
      type: Number,
    },
  },
  mounted() {
    this.$nextTick(() => {
      // console.log("Scene", this.scene);
      this.infoHotspots.forEach((info) => {
        info.initialize(this.scene);
      });
      this.linkHotspots.forEach((link) => {
        link.initialize(this.scene);
      });
    });
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
        view: view,
      };
    },
    addHotspots(scenes) {
      console.log(scenes);
      // // info hotspots
      // this.sceneData.infoHotspots.forEach((hotspot) => {
      //   let wrapper = document.createDocumentFragment();
      //   let h = createApp(InfoHotspot, { hotspotData: hotspot }).mount(wrapper);
      //   h.initialize(this.scene);
      // });
      // link hotspots
      // this.sceneData.linkHotspots.forEach((hotspot) => {
      //   let wrapper = document.createDocumentFragment();
      //   let h = createApp(LinkHotspot, { hotspotData: hotspot }).mount(wrapper);
      //   h.initialize(this.scene, scenes);
      // });
    },
    switchScene() {
      this.scene.switchTo();
    },
  },
  data() {
    return {
      scene: null,
      infoHotspots: ref([]),
      linkHotspots: ref([]),
    };
  },
};
</script>

<style></style>
