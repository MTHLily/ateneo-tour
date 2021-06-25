<template>
    <a href="javascript:void(0)" id="autorotateToggle" @click="toggleRotate">
        <img
            class="icon off"
            :src="`img/${isRotating ? 'pause' : 'play'}.png`"
        />
    </a>
</template>

<script>
export default {
    methods: {
        toggleRotate() {
            this.isRotating = !this.isRotating;
            this.$emit("toggle-rotate", this.isRotating);
        },
    },
    data() {
        return {
            isRotating: true,
        };
    },
};
</script>

<style></style>
