<template>
  <div class="link-hotspot" ref="hotspotEl" @click="changeScene">
    <a-tooltip placement="right">
      <template #title>
        <span v-html="hotspotData.targetName"></span>
      </template>
      <a-button shape="circle">
        <i class="fas fa-chevron-up"></i>
      </a-button>
    </a-tooltip>
  </div>
</template>

<script>
export default {
  name: "InfoHotspot",
  props: { hotspotData: Object, viewer: {} },
  emits: ["sceneUpdateTarget"],
  computed: {
    styleString() {
      var style = {
        "-ms-transform": `rotate(${this.hotspotData.rotation}rad)`,
        "-webkit-transform": `rotate(${this.hotspotData.rotation}rad)`,
        transform: `rotate(${this.hotspotData.rotation}rad)`,
      };
      return style;
    },
  },
  methods: {
    initialize(scene) {
      scene.hotspotContainer().createHotspot(this.$el, {
        yaw: this.hotspotData.yaw,
        pitch: this.hotspotData.pitch,
      });
    },
    // Event handler for @sceneUpdateTarget
    // Used when scene needs to be switched
    changeScene() {
      this.$emit("sceneUpdateTarget", this.hotspotData.target);
    },
  },
  data() {
    return {
      targetScene: null,
      showModal: false,
    };
  },
};
</script>
