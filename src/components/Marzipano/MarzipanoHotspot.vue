<template>
  <div class="hotspot info-hotspot info-hotspot-modal">
    <div class="info-hotspot-header">
      <div class="info-hotspot-icon-wrapper">
        <img :src="imageSrc" class="info-hotspot-icon" />
      </div>
      <div class="info-hotspot-title-wrapper">
        <div class="info-hotspot-title">Title</div>
      </div>
      <div class="info-hotspot-close-wrapper">
        <img src="close.png" class="info-hotspot-close-icon" />
      </div>
    </div>
    <div class="info-hotspot-text">
      Hello, world!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    imageSrc: "#";
  },
};
</script>

<style></style>
