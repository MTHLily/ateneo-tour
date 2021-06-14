<template>
  <a
    href="javascript:void(0)"
    ref="upEl"
    class="viewControlButton viewControlButton-1"
  >
    <img class="icon" src="img/up.png" />
  </a>
  <a
    href="javascript:void(0)"
    ref="downEl"
    class="viewControlButton viewControlButton-2"
  >
    <img class="icon" src="img/down.png" />
  </a>
  <a
    href="javascript:void(0)"
    ref="leftEl"
    class="viewControlButton viewControlButton-3"
  >
    <img class="icon" src="img/left.png" />
  </a>
  <a
    href="javascript:void(0)"
    ref="rightEl"
    class="viewControlButton viewControlButton-4"
  >
    <img class="icon" src="img/right.png" />
  </a>
  <a
    href="javascript:void(0)"
    ref="zoomIn"
    class="viewControlButton viewControlButton-5"
  >
    <img class="icon" src="img/plus.png" />
  </a>
  <a
    href="javascript:void(0)"
    ref="zoomOut"
    class="viewControlButton viewControlButton-6"
  >
    <img class="icon" src="img/minus.png" />
  </a>
</template>

<script>
import Marzipano from "marzipano";

export default {
  props: ["velocity", "friction"],
  methods: {
    initialize(viewer) {
      console.log(this.velocity, this.viewer);
      var controls = viewer.controls();
      controls.registerMethod(
        "upElement",
        new Marzipano.ElementPressControlMethod(
          this.$refs.upEl,
          "y",
          -this.velocity,
          this.friction
        ),
        true
      );
      controls.registerMethod(
        "downElement",
        new Marzipano.ElementPressControlMethod(
          this.$refs.downEl,
          "y",
          this.velocity,
          this.friction
        ),
        true
      );
      controls.registerMethod(
        "leftElement",
        new Marzipano.ElementPressControlMethod(
          this.$refs.leftEl,
          "x",
          -this.velocity,
          this.friction
        ),
        true
      );
      controls.registerMethod(
        "rightElement",
        new Marzipano.ElementPressControlMethod(
          this.$refs.rightEl,
          "x",
          this.velocity,
          this.friction
        ),
        true
      );
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
    },
  },
};
</script>

<style></style>
