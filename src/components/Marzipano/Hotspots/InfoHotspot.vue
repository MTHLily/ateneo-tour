<template>
  <div class="info-hotspot" ref="hotspotEl">
    <a-popover :title="hotspotData.title" placement="bottom" trigger="focus">
      <a-button type="primary" shape="circle" @mouseover="setOpen(true)">
        <i class="fas fa-question"></i>
      </a-button>
    </a-popover>

    <transition name="fade">
      <a-card class="test" size="small" :title="hotspotData.title" style="width: 300px" v-show="isOpen" @mouseleave="setOpen(false)">
        <template #extra>
          <i class="fas fa-expand"></i>
        </template>
        <p v-html="hotspotData.text"></p>
      </a-card>
    </transition>
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
    setOpen(isOpen) {
      this.isOpen = isOpen;
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>

.test {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%); 
  position: absolute;
}

.fas:hover {
  color: red;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
