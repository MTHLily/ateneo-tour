<template>
  <div class="link-hotspot" ref="hotspotEl" @click="changeScene">
    <img src="img/link.png" class="icon" :style="styleString" />
    <div class="hotspot-tooltip tooltip">
      {{ hotspotData.targetName }}
    </div>
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
