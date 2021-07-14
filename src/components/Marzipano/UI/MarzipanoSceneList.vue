<template>
  <a-menu mode="inline" theme="dark">
    <slot></slot>
  </a-menu>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style></style>
