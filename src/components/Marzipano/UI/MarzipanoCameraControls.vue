<template>
  <div class="controlPanel">
    <a
      href="javascript:void(0)"
      ref="zoomIn"
    >
      <a-tooltip title="Zoom In" placement="left">
        <a-button shape="circle">
          <i class="fas fa-search-plus"></i>
        </a-button>
      </a-tooltip>
    </a>
    <a
      href="javascript:void(0)"
      ref="zoomOut"
    >
      <a-tooltip title="Zoom Out" placement="left">
        <a-button shape="circle">
          <i class="fas fa-search-minus"></i>
        </a-button>
      </a-tooltip>
    </a>
    
    <marzipano-rotate-toggle @toggle-rotate="toggleAutorotate" />
  </div>
</template>

<script>
import Marzipano from "marzipano";
import MarzipanoRotateToggle from "./MarzipanoRotateToggle.vue";

export default {
  props: ["velocity", "friction"],
  components: {MarzipanoRotateToggle},
  methods: {
    initialize(viewer) {
      this.viewer = viewer;
      var controls = viewer.controls();

      controls.registerMethod(
        "inElement",
        new Marzipano.ElementPressControlMethod(
          this.$refs.zoomIn,
          "zoom",
          -this.velocity,
          this.friction
        ),
        true
      );
      controls.registerMethod(
        "outElement",
        new Marzipano.ElementPressControlMethod(
          this.$refs.zoomOut,
          "zoom",
          this.velocity,
          this.friction
        ),
        true
      );

      // Set up autorotate, if enabled.
        this.autorotate = Marzipano.autorotate({
            yawSpeed: 0.03,
            targetPitch: 0,
            targetFov: Math.PI / 2,
        });

        this.viewer.startMovement(this.autorotate);
        this.viewer.setIdleMovement(3000, this.autorotate);
    },
    toggleAutorotate(isRotating) {
      if (!isRotating) {
        //Stop Rotating
        this.viewer.stopMovement();
        this.viewer.setIdleMovement(Infinity);
      } else {
        //Start Rotating
        this.viewer.startMovement(this.autorotate);
        this.viewer.setIdleMovement(3000, this.autorotate);
      }
    },
  },
  data() {
    return {
      viewer: null,
      autorotate: null,
    }
  }
};
</script>

<style></style>
