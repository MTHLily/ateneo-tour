<template>
  <div class="link-hotspot" ref="hotspotEl" @click="changeScene">
    <img src="img/link.png" class="icon" />
    <div v-if="targetScene" class="hotspot-tooltip tooltip">
      {{ targetScene.data.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoHotspot",
  props: { hotspotData: Object, viewer: {} },
  methods: {
    // initialize(scene, sceneList) {
    //   scene.hotspotContainer().createHotspot(this.$el, {
    //     yaw: this.hotspotData.yaw,
    //     pitch: this.hotspotData.pitch,
    //   });
    //   this.$data.targetScene = sceneList.find(
    //     (scene) => scene.data.id === this.hotspotData.target
    //   );
    // },
    initialize(scene) {
      scene.hotspotContainer().createHotspot(this.$el, {
        yaw: this.hotspotData.yaw,
        pitch: this.hotspotData.pitch,
      });
    },
    changeScene() {
      // this.targetScene.scene.switchTo();
      console.log("change-scene");
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
