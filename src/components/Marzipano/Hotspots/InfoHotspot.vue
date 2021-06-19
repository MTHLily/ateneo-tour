<template>
  <div class="info-hotspot" ref="hotspotEl">
    <div class="header" @click="onToggle">
      <div class="icon-wrapper">
        <img src="img/info.png" class="icon" />
      </div>
      <div class="title-wrapper">
        <div class="title">{{ hotspotData.title }}</div>
      </div>
      <div class="close-wrapper">
        <img src="img/close.png" class="close-icon" />
      </div>
    </div>
    <div class="text">
      {{ hotspotData.text }}
    </div>

    <teleport to="body">
      <div v-if="showModal" class="modal">
        <div class="header">
          <div class="icon-wrapper">
            <img src="img/info.png" class="icon" />
          </div>
          <div class="title-wrapper">
            <div class="title">{{ hotspotData.title }}</div>
          </div>
          <div class="close-wrapper" @click="onToggle">
            <img src="img/close.png" class="close-icon" />
          </div>
        </div>
        <div class="text">
          {{ hotspotData.text }}
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  name: "InfoHotspot",
  props: { hotspotData: Object },
  methods: {
    initialize(scene) {
      scene.hotspotContainer().createHotspot(this.$el, {
        yaw: this.hotspotData.yaw,
        pitch: this.hotspotData.pitch,
      });
    },
    onToggle() {
      this.$refs.hotspotEl.classList.toggle("visible");
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
