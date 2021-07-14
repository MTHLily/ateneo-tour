<template>
  <a-menu-item :key="menuKey">
    <a
      href="javascript:void(0)"
      @click="switchScene"
      :class="{ current: isCurrent }"
    >
      <span>{{ sceneData.name }}</span>
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
      @sceneUpdateTarget="switchSceneByTarget"
    ></link-hotspot>
  </a-menu-item>
</template>

<script>
import Marzipano from "marzipano";
import { ref } from "vue";
import InfoHotspot from "./Hotspots/InfoHotspot.vue";
import LinkHotspot from "./Hotspots/LinkHotspot.vue";

export default {
  components: { InfoHotspot, LinkHotspot },
  props: {
    menuKey: Number,
    sceneData: {},
    currentSceneTarget: {},
  },
  computed: {
    isCurrent() {
      return this.sceneData.id === this.currentSceneTarget;
    },
  },
  emits: ["sceneUpdateTarget"],
  mounted() {
    this.$nextTick(() => {
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

    // Event handler when the scene in the scene list was clicked
    // Originally just used the already stored scene object
    // to switch scenes
    // However, this was changed to use the @sceneUpdateTarget event
    // For better consistency, and so scene changes are actually done
    // In a single function
    switchScene() {
      this.switchSceneByTarget(this.sceneData.id);
    },

    // Event handler for @sceneUpdateTarget
    // Used when scene needs to be switched
    // In MarzipanoScene, this is just being
    // passed along from LinkHotspot to MarzipanoScene
    switchSceneByTarget(target) {
      this.$emit("sceneUpdateTarget", target);
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
