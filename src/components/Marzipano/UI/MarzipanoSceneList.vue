<template>
  <div id="sceneList" :class="{ enabled: show }">
    <ul class="scenes">
      <slot></slot>
    </ul>
  </div>

  <a href="javascript:void(0)" id="sceneListToggle" @click="show = !show">
    <img class="icon off" src="img/expand.png" />
    <img class="icon on" src="img/collapse.png" />
  </a>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style></style>
